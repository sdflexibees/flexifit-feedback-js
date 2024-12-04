/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getFlexifitFeedback } from "./graphql/queries";
import { updateFlexifitFeedback } from "./graphql/mutations";
const client = generateClient();
export default function FlexifitFeedbackUpdateForm(props) {
  const {
    id: idProp,
    flexifitFeedback: flexifitFeedbackModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    comment: "",
    candidateName: "",
    candidateId: "",
    candidateLocation: "",
    interviewer: "",
    interviewDate: "",
  };
  const [comment, setComment] = React.useState(initialValues.comment);
  const [candidateName, setCandidateName] = React.useState(
    initialValues.candidateName
  );
  const [candidateId, setCandidateId] = React.useState(
    initialValues.candidateId
  );
  const [candidateLocation, setCandidateLocation] = React.useState(
    initialValues.candidateLocation
  );
  const [interviewer, setInterviewer] = React.useState(
    initialValues.interviewer
  );
  const [interviewDate, setInterviewDate] = React.useState(
    initialValues.interviewDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = flexifitFeedbackRecord
      ? { ...initialValues, ...flexifitFeedbackRecord }
      : initialValues;
    setComment(cleanValues.comment);
    setCandidateName(cleanValues.candidateName);
    setCandidateId(cleanValues.candidateId);
    setCandidateLocation(cleanValues.candidateLocation);
    setInterviewer(cleanValues.interviewer);
    setInterviewDate(cleanValues.interviewDate);
    setErrors({});
  };
  const [flexifitFeedbackRecord, setFlexifitFeedbackRecord] = React.useState(
    flexifitFeedbackModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getFlexifitFeedback.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFlexifitFeedback
        : flexifitFeedbackModelProp;
      setFlexifitFeedbackRecord(record);
    };
    queryData();
  }, [idProp, flexifitFeedbackModelProp]);
  React.useEffect(resetStateValues, [flexifitFeedbackRecord]);
  const validations = {
    comment: [],
    candidateName: [],
    candidateId: [],
    candidateLocation: [],
    interviewer: [],
    interviewDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          comment: comment ?? null,
          candidateName: candidateName ?? null,
          candidateId: candidateId ?? null,
          candidateLocation: candidateLocation ?? null,
          interviewer: interviewer ?? null,
          interviewDate: interviewDate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateFlexifitFeedback.replaceAll("__typename", ""),
            variables: {
              input: {
                id: flexifitFeedbackRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FlexifitFeedbackUpdateForm")}
      {...rest}
    >
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment: value,
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <TextField
        label="Candidate name"
        isRequired={false}
        isReadOnly={false}
        value={candidateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              candidateName: value,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
            };
            const result = onChange(modelFields);
            value = result?.candidateName ?? value;
          }
          if (errors.candidateName?.hasError) {
            runValidationTasks("candidateName", value);
          }
          setCandidateName(value);
        }}
        onBlur={() => runValidationTasks("candidateName", candidateName)}
        errorMessage={errors.candidateName?.errorMessage}
        hasError={errors.candidateName?.hasError}
        {...getOverrideProps(overrides, "candidateName")}
      ></TextField>
      <TextField
        label="Candidate id"
        isRequired={false}
        isReadOnly={false}
        value={candidateId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              candidateName,
              candidateId: value,
              candidateLocation,
              interviewer,
              interviewDate,
            };
            const result = onChange(modelFields);
            value = result?.candidateId ?? value;
          }
          if (errors.candidateId?.hasError) {
            runValidationTasks("candidateId", value);
          }
          setCandidateId(value);
        }}
        onBlur={() => runValidationTasks("candidateId", candidateId)}
        errorMessage={errors.candidateId?.errorMessage}
        hasError={errors.candidateId?.hasError}
        {...getOverrideProps(overrides, "candidateId")}
      ></TextField>
      <TextField
        label="Candidate location"
        isRequired={false}
        isReadOnly={false}
        value={candidateLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              candidateName,
              candidateId,
              candidateLocation: value,
              interviewer,
              interviewDate,
            };
            const result = onChange(modelFields);
            value = result?.candidateLocation ?? value;
          }
          if (errors.candidateLocation?.hasError) {
            runValidationTasks("candidateLocation", value);
          }
          setCandidateLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("candidateLocation", candidateLocation)
        }
        errorMessage={errors.candidateLocation?.errorMessage}
        hasError={errors.candidateLocation?.hasError}
        {...getOverrideProps(overrides, "candidateLocation")}
      ></TextField>
      <TextField
        label="Interviewer"
        isRequired={false}
        isReadOnly={false}
        value={interviewer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              candidateName,
              candidateId,
              candidateLocation,
              interviewer: value,
              interviewDate,
            };
            const result = onChange(modelFields);
            value = result?.interviewer ?? value;
          }
          if (errors.interviewer?.hasError) {
            runValidationTasks("interviewer", value);
          }
          setInterviewer(value);
        }}
        onBlur={() => runValidationTasks("interviewer", interviewer)}
        errorMessage={errors.interviewer?.errorMessage}
        hasError={errors.interviewer?.hasError}
        {...getOverrideProps(overrides, "interviewer")}
      ></TextField>
      <TextField
        label="Interview date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={interviewDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              comment,
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate: value,
            };
            const result = onChange(modelFields);
            value = result?.interviewDate ?? value;
          }
          if (errors.interviewDate?.hasError) {
            runValidationTasks("interviewDate", value);
          }
          setInterviewDate(value);
        }}
        onBlur={() => runValidationTasks("interviewDate", interviewDate)}
        errorMessage={errors.interviewDate?.errorMessage}
        hasError={errors.interviewDate?.hasError}
        {...getOverrideProps(overrides, "interviewDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || flexifitFeedbackModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || flexifitFeedbackModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
