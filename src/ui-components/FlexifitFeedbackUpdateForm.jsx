/* eslint-disable */
"use client";
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
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
    candidateName: "",
    candidateId: "",
    candidateLocation: "",
    interviewer: "",
    interviewDate: "",
    jobLocation: "",
    roles: "",
    interviewerJobLocation: "",
    typeOfContract: "",
    driveToWork: "",
    careerAmbition: "",
    financialDrive: "",
    learningReadiness: "",
    jobSearch: "",
    jobSuccess: "",
    lastWorked: "",
    maritalStatus: "",
    singleType: "",
    kidsAge: "",
    spouseSupportKids: "",
    helperSupportKids: "",
    familySupportKids: "",
    spouseSupportHousehold: "",
    helperSupportHousehold: "",
    familySupportHousehold: "",
    careGiving: "",
    extentOfCareGiving: "",
    helperSupportCareGiving: "",
    readyToExtendSupport: "",
    OtherCommitments: "",
    comment: "",
  };
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
  const [jobLocation, setJobLocation] = React.useState(
    initialValues.jobLocation
  );
  const [roles, setRoles] = React.useState(initialValues.roles);
  const [interviewerJobLocation, setInterviewerJobLocation] = React.useState(
    initialValues.interviewerJobLocation
  );
  const [typeOfContract, setTypeOfContract] = React.useState(
    initialValues.typeOfContract
  );
  const [driveToWork, setDriveToWork] = React.useState(
    initialValues.driveToWork
  );
  const [careerAmbition, setCareerAmbition] = React.useState(
    initialValues.careerAmbition
  );
  const [financialDrive, setFinancialDrive] = React.useState(
    initialValues.financialDrive
  );
  const [learningReadiness, setLearningReadiness] = React.useState(
    initialValues.learningReadiness
  );
  const [jobSearch, setJobSearch] = React.useState(initialValues.jobSearch);
  const [jobSuccess, setJobSuccess] = React.useState(initialValues.jobSuccess);
  const [lastWorked, setLastWorked] = React.useState(initialValues.lastWorked);
  const [maritalStatus, setMaritalStatus] = React.useState(
    initialValues.maritalStatus
  );
  const [singleType, setSingleType] = React.useState(initialValues.singleType);
  const [kidsAge, setKidsAge] = React.useState(initialValues.kidsAge);
  const [spouseSupportKids, setSpouseSupportKids] = React.useState(
    initialValues.spouseSupportKids
  );
  const [helperSupportKids, setHelperSupportKids] = React.useState(
    initialValues.helperSupportKids
  );
  const [familySupportKids, setFamilySupportKids] = React.useState(
    initialValues.familySupportKids
  );
  const [spouseSupportHousehold, setSpouseSupportHousehold] = React.useState(
    initialValues.spouseSupportHousehold
  );
  const [helperSupportHousehold, setHelperSupportHousehold] = React.useState(
    initialValues.helperSupportHousehold
  );
  const [familySupportHousehold, setFamilySupportHousehold] = React.useState(
    initialValues.familySupportHousehold
  );
  const [careGiving, setCareGiving] = React.useState(initialValues.careGiving);
  const [extentOfCareGiving, setExtentOfCareGiving] = React.useState(
    initialValues.extentOfCareGiving
  );
  const [helperSupportCareGiving, setHelperSupportCareGiving] = React.useState(
    initialValues.helperSupportCareGiving
  );
  const [readyToExtendSupport, setReadyToExtendSupport] = React.useState(
    initialValues.readyToExtendSupport
  );
  const [OtherCommitments, setOtherCommitments] = React.useState(
    initialValues.OtherCommitments
  );
  const [comment, setComment] = React.useState(initialValues.comment);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = flexifitFeedbackRecord
      ? { ...initialValues, ...flexifitFeedbackRecord }
      : initialValues;
    setCandidateName(cleanValues.candidateName);
    setCandidateId(cleanValues.candidateId);
    setCandidateLocation(cleanValues.candidateLocation);
    setInterviewer(cleanValues.interviewer);
    setInterviewDate(cleanValues.interviewDate);
    setJobLocation(cleanValues.jobLocation);
    setRoles(cleanValues.roles);
    setInterviewerJobLocation(cleanValues.interviewerJobLocation);
    setTypeOfContract(cleanValues.typeOfContract);
    setDriveToWork(cleanValues.driveToWork);
    setCareerAmbition(cleanValues.careerAmbition);
    setFinancialDrive(cleanValues.financialDrive);
    setLearningReadiness(cleanValues.learningReadiness);
    setJobSearch(cleanValues.jobSearch);
    setJobSuccess(cleanValues.jobSuccess);
    setLastWorked(cleanValues.lastWorked);
    setMaritalStatus(cleanValues.maritalStatus);
    setSingleType(cleanValues.singleType);
    setKidsAge(cleanValues.kidsAge);
    setSpouseSupportKids(cleanValues.spouseSupportKids);
    setHelperSupportKids(cleanValues.helperSupportKids);
    setFamilySupportKids(cleanValues.familySupportKids);
    setSpouseSupportHousehold(cleanValues.spouseSupportHousehold);
    setHelperSupportHousehold(cleanValues.helperSupportHousehold);
    setFamilySupportHousehold(cleanValues.familySupportHousehold);
    setCareGiving(cleanValues.careGiving);
    setExtentOfCareGiving(cleanValues.extentOfCareGiving);
    setHelperSupportCareGiving(cleanValues.helperSupportCareGiving);
    setReadyToExtendSupport(cleanValues.readyToExtendSupport);
    setOtherCommitments(cleanValues.OtherCommitments);
    setComment(cleanValues.comment);
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
    candidateName: [],
    candidateId: [],
    candidateLocation: [],
    interviewer: [],
    interviewDate: [],
    jobLocation: [],
    roles: [],
    interviewerJobLocation: [],
    typeOfContract: [],
    driveToWork: [],
    careerAmbition: [],
    financialDrive: [],
    learningReadiness: [],
    jobSearch: [],
    jobSuccess: [],
    lastWorked: [],
    maritalStatus: [],
    singleType: [],
    kidsAge: [],
    spouseSupportKids: [],
    helperSupportKids: [],
    familySupportKids: [],
    spouseSupportHousehold: [],
    helperSupportHousehold: [],
    familySupportHousehold: [],
    careGiving: [],
    extentOfCareGiving: [],
    helperSupportCareGiving: [],
    readyToExtendSupport: [],
    OtherCommitments: [],
    comment: [],
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
          candidateName: candidateName ?? null,
          candidateId: candidateId ?? null,
          candidateLocation: candidateLocation ?? null,
          interviewer: interviewer ?? null,
          interviewDate: interviewDate ?? null,
          jobLocation: jobLocation ?? null,
          roles: roles ?? null,
          interviewerJobLocation: interviewerJobLocation ?? null,
          typeOfContract: typeOfContract ?? null,
          driveToWork: driveToWork ?? null,
          careerAmbition: careerAmbition ?? null,
          financialDrive: financialDrive ?? null,
          learningReadiness: learningReadiness ?? null,
          jobSearch: jobSearch ?? null,
          jobSuccess: jobSuccess ?? null,
          lastWorked: lastWorked ?? null,
          maritalStatus: maritalStatus ?? null,
          singleType: singleType ?? null,
          kidsAge: kidsAge ?? null,
          spouseSupportKids: spouseSupportKids ?? null,
          helperSupportKids: helperSupportKids ?? null,
          familySupportKids: familySupportKids ?? null,
          spouseSupportHousehold: spouseSupportHousehold ?? null,
          helperSupportHousehold: helperSupportHousehold ?? null,
          familySupportHousehold: familySupportHousehold ?? null,
          careGiving: careGiving ?? null,
          extentOfCareGiving: extentOfCareGiving ?? null,
          helperSupportCareGiving: helperSupportCareGiving ?? null,
          readyToExtendSupport: readyToExtendSupport ?? null,
          OtherCommitments: OtherCommitments ?? null,
          comment: comment ?? null,
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
        label="Candidate name"
        isRequired={false}
        isReadOnly={false}
        value={candidateName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName: value,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
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
              candidateName,
              candidateId: value,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
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
              candidateName,
              candidateId,
              candidateLocation: value,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
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
              candidateName,
              candidateId,
              candidateLocation,
              interviewer: value,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
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
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate: value,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
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
      <TextField
        label="Job location"
        isRequired={false}
        isReadOnly={false}
        value={jobLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation: value,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobLocation ?? value;
          }
          if (errors.jobLocation?.hasError) {
            runValidationTasks("jobLocation", value);
          }
          setJobLocation(value);
        }}
        onBlur={() => runValidationTasks("jobLocation", jobLocation)}
        errorMessage={errors.jobLocation?.errorMessage}
        hasError={errors.jobLocation?.hasError}
        {...getOverrideProps(overrides, "jobLocation")}
      ></TextField>
      <SelectField
        label="Roles"
        placeholder="Please select an option"
        isDisabled={false}
        value={roles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles: value,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.roles ?? value;
          }
          if (errors.roles?.hasError) {
            runValidationTasks("roles", value);
          }
          setRoles(value);
        }}
        onBlur={() => runValidationTasks("roles", roles)}
        errorMessage={errors.roles?.errorMessage}
        hasError={errors.roles?.hasError}
        {...getOverrideProps(overrides, "roles")}
      >
        <option
          children="Team member 1"
          value="Team_Member_1"
          {...getOverrideProps(overrides, "rolesoption0")}
        ></option>
        <option
          children="Team manager 4"
          value="Team_Manager_4"
          {...getOverrideProps(overrides, "rolesoption1")}
        ></option>
        <option
          children="Individual contributor 3"
          value="Individual_Contributor_3"
          {...getOverrideProps(overrides, "rolesoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Interviewer job location"
        isRequired={false}
        isReadOnly={false}
        value={interviewerJobLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation: value,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.interviewerJobLocation ?? value;
          }
          if (errors.interviewerJobLocation?.hasError) {
            runValidationTasks("interviewerJobLocation", value);
          }
          setInterviewerJobLocation(value);
        }}
        onBlur={() =>
          runValidationTasks("interviewerJobLocation", interviewerJobLocation)
        }
        errorMessage={errors.interviewerJobLocation?.errorMessage}
        hasError={errors.interviewerJobLocation?.hasError}
        {...getOverrideProps(overrides, "interviewerJobLocation")}
      ></TextField>
      <SelectField
        label="Type of contract"
        placeholder="Please select an option"
        isDisabled={false}
        value={typeOfContract}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract: value,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.typeOfContract ?? value;
          }
          if (errors.typeOfContract?.hasError) {
            runValidationTasks("typeOfContract", value);
          }
          setTypeOfContract(value);
        }}
        onBlur={() => runValidationTasks("typeOfContract", typeOfContract)}
        errorMessage={errors.typeOfContract?.errorMessage}
        hasError={errors.typeOfContract?.hasError}
        {...getOverrideProps(overrides, "typeOfContract")}
      >
        <option
          children="Short term 2"
          value="short_term_2"
          {...getOverrideProps(overrides, "typeOfContractoption0")}
        ></option>
        <option
          children="Long term 1"
          value="long_term_1"
          {...getOverrideProps(overrides, "typeOfContractoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Drive to work"
        placeholder="Please select an option"
        isDisabled={false}
        value={driveToWork}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork: value,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.driveToWork ?? value;
          }
          if (errors.driveToWork?.hasError) {
            runValidationTasks("driveToWork", value);
          }
          setDriveToWork(value);
        }}
        onBlur={() => runValidationTasks("driveToWork", driveToWork)}
        errorMessage={errors.driveToWork?.errorMessage}
        hasError={errors.driveToWork?.hasError}
        {...getOverrideProps(overrides, "driveToWork")}
      >
        <option
          children="Very high 3"
          value="very_high_3"
          {...getOverrideProps(overrides, "driveToWorkoption0")}
        ></option>
        <option
          children="High 2"
          value="high_2"
          {...getOverrideProps(overrides, "driveToWorkoption1")}
        ></option>
        <option
          children="Low 1"
          value="low_1"
          {...getOverrideProps(overrides, "driveToWorkoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Career ambition"
        placeholder="Please select an option"
        isDisabled={false}
        value={careerAmbition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition: value,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.careerAmbition ?? value;
          }
          if (errors.careerAmbition?.hasError) {
            runValidationTasks("careerAmbition", value);
          }
          setCareerAmbition(value);
        }}
        onBlur={() => runValidationTasks("careerAmbition", careerAmbition)}
        errorMessage={errors.careerAmbition?.errorMessage}
        hasError={errors.careerAmbition?.hasError}
        {...getOverrideProps(overrides, "careerAmbition")}
      >
        <option
          children="Wfh flexibility 3"
          value="WFH_Flexibility_3"
          {...getOverrideProps(overrides, "careerAmbitionoption0")}
        ></option>
        <option
          children="Long term job 1"
          value="Long_term_job_1"
          {...getOverrideProps(overrides, "careerAmbitionoption1")}
        ></option>
        <option
          children="Utilize free time 2"
          value="Utilize_free_Time_2"
          {...getOverrideProps(overrides, "careerAmbitionoption2")}
        ></option>
        <option
          children="Restart work after break 3"
          value="Restart_work_after_break_3"
          {...getOverrideProps(overrides, "careerAmbitionoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Financial drive"
        placeholder="Please select an option"
        isDisabled={false}
        value={financialDrive}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive: value,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.financialDrive ?? value;
          }
          if (errors.financialDrive?.hasError) {
            runValidationTasks("financialDrive", value);
          }
          setFinancialDrive(value);
        }}
        onBlur={() => runValidationTasks("financialDrive", financialDrive)}
        errorMessage={errors.financialDrive?.errorMessage}
        hasError={errors.financialDrive?.hasError}
        {...getOverrideProps(overrides, "financialDrive")}
      >
        <option
          children="Spend on self 1"
          value="spend_on_self_1"
          {...getOverrideProps(overrides, "financialDriveoption0")}
        ></option>
        <option
          children="Contribute household minor 2"
          value="Contribute_household_minor_2"
          {...getOverrideProps(overrides, "financialDriveoption1")}
        ></option>
        <option
          children="Contribute household major 3"
          value="Contribute_household_major_3"
          {...getOverrideProps(overrides, "financialDriveoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Learning readiness"
        placeholder="Please select an option"
        isDisabled={false}
        value={learningReadiness}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness: value,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.learningReadiness ?? value;
          }
          if (errors.learningReadiness?.hasError) {
            runValidationTasks("learningReadiness", value);
          }
          setLearningReadiness(value);
        }}
        onBlur={() =>
          runValidationTasks("learningReadiness", learningReadiness)
        }
        errorMessage={errors.learningReadiness?.errorMessage}
        hasError={errors.learningReadiness?.hasError}
        {...getOverrideProps(overrides, "learningReadiness")}
      >
        <option
          children="Learning is essential 2"
          value="learning_is_essential_2"
          {...getOverrideProps(overrides, "learningReadinessoption0")}
        ></option>
        <option
          children="Satisfaction work 1"
          value="satisfaction_work_1"
          {...getOverrideProps(overrides, "learningReadinessoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Job search"
        placeholder="Please select an option"
        isDisabled={false}
        value={jobSearch}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch: value,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobSearch ?? value;
          }
          if (errors.jobSearch?.hasError) {
            runValidationTasks("jobSearch", value);
          }
          setJobSearch(value);
        }}
        onBlur={() => runValidationTasks("jobSearch", jobSearch)}
        errorMessage={errors.jobSearch?.errorMessage}
        hasError={errors.jobSearch?.hasError}
        {...getOverrideProps(overrides, "jobSearch")}
      >
        <option
          children="Looking very actively 3"
          value="Looking_Very_actively_3"
          {...getOverrideProps(overrides, "jobSearchoption0")}
        ></option>
        <option
          children="Moderately active 2"
          value="Moderately_active_2"
          {...getOverrideProps(overrides, "jobSearchoption1")}
        ></option>
        <option
          children="Job search inactive 1"
          value="Job_search_Inactive_1"
          {...getOverrideProps(overrides, "jobSearchoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Job success"
        placeholder="Please select an option"
        isDisabled={false}
        value={jobSuccess}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess: value,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.jobSuccess ?? value;
          }
          if (errors.jobSuccess?.hasError) {
            runValidationTasks("jobSuccess", value);
          }
          setJobSuccess(value);
        }}
        onBlur={() => runValidationTasks("jobSuccess", jobSuccess)}
        errorMessage={errors.jobSuccess?.errorMessage}
        hasError={errors.jobSuccess?.hasError}
        {...getOverrideProps(overrides, "jobSuccess")}
      >
        <option
          children="Not many callback 3"
          value="Not_Many_callback_3"
          {...getOverrideProps(overrides, "jobSuccessoption0")}
        ></option>
        <option
          children="Received callback 2"
          value="Received_callback_2"
          {...getOverrideProps(overrides, "jobSuccessoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Last worked"
        placeholder="Please select an option"
        isDisabled={false}
        value={lastWorked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked: value,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.lastWorked ?? value;
          }
          if (errors.lastWorked?.hasError) {
            runValidationTasks("lastWorked", value);
          }
          setLastWorked(value);
        }}
        onBlur={() => runValidationTasks("lastWorked", lastWorked)}
        errorMessage={errors.lastWorked?.errorMessage}
        hasError={errors.lastWorked?.hasError}
        {...getOverrideProps(overrides, "lastWorked")}
      >
        <option
          children="Yrs 0 2 3"
          value="Yrs_0_2_3"
          {...getOverrideProps(overrides, "lastWorkedoption0")}
        ></option>
        <option
          children="Yrs more 5 1"
          value="Yrs_More_5_1"
          {...getOverrideProps(overrides, "lastWorkedoption1")}
        ></option>
        <option
          children="Yrs 2 5 2"
          value="Yrs_2_5_2"
          {...getOverrideProps(overrides, "lastWorkedoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Marital status"
        placeholder="Please select an option"
        isDisabled={false}
        value={maritalStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus: value,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.maritalStatus ?? value;
          }
          if (errors.maritalStatus?.hasError) {
            runValidationTasks("maritalStatus", value);
          }
          setMaritalStatus(value);
        }}
        onBlur={() => runValidationTasks("maritalStatus", maritalStatus)}
        errorMessage={errors.maritalStatus?.errorMessage}
        hasError={errors.maritalStatus?.hasError}
        {...getOverrideProps(overrides, "maritalStatus")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "maritalStatusoption0")}
        ></option>
        <option
          children="Married 1"
          value="Married_1"
          {...getOverrideProps(overrides, "maritalStatusoption1")}
        ></option>
        <option
          children="Single 2"
          value="Single_2"
          {...getOverrideProps(overrides, "maritalStatusoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Single type"
        placeholder="Please select an option"
        isDisabled={false}
        value={singleType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType: value,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.singleType ?? value;
          }
          if (errors.singleType?.hasError) {
            runValidationTasks("singleType", value);
          }
          setSingleType(value);
        }}
        onBlur={() => runValidationTasks("singleType", singleType)}
        errorMessage={errors.singleType?.errorMessage}
        hasError={errors.singleType?.hasError}
        {...getOverrideProps(overrides, "singleType")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "singleTypeoption0")}
        ></option>
        <option
          children="Un married 1"
          value="UnMarried_1"
          {...getOverrideProps(overrides, "singleTypeoption1")}
        ></option>
        <option
          children="Separated divorced 2"
          value="Separated_Divorced_2"
          {...getOverrideProps(overrides, "singleTypeoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Kids age"
        placeholder="Please select an option"
        isDisabled={false}
        value={kidsAge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge: value,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.kidsAge ?? value;
          }
          if (errors.kidsAge?.hasError) {
            runValidationTasks("kidsAge", value);
          }
          setKidsAge(value);
        }}
        onBlur={() => runValidationTasks("kidsAge", kidsAge)}
        errorMessage={errors.kidsAge?.errorMessage}
        hasError={errors.kidsAge?.hasError}
        {...getOverrideProps(overrides, "kidsAge")}
      >
        <option
          children="No kids 0"
          value="No_kids_0"
          {...getOverrideProps(overrides, "kidsAgeoption0")}
        ></option>
        <option
          children="Yrs 0 5 1"
          value="Yrs_0_5_1"
          {...getOverrideProps(overrides, "kidsAgeoption1")}
        ></option>
        <option
          children="Yrs 5 12 2"
          value="Yrs_5_12_2"
          {...getOverrideProps(overrides, "kidsAgeoption2")}
        ></option>
        <option
          children="Yrs 12 16 3"
          value="Yrs_12_16_3"
          {...getOverrideProps(overrides, "kidsAgeoption3")}
        ></option>
        <option
          children="Yrs 16 plus 4"
          value="Yrs_16_plus_4"
          {...getOverrideProps(overrides, "kidsAgeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids: value,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportKids ?? value;
          }
          if (errors.spouseSupportKids?.hasError) {
            runValidationTasks("spouseSupportKids", value);
          }
          setSpouseSupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("spouseSupportKids", spouseSupportKids)
        }
        errorMessage={errors.spouseSupportKids?.errorMessage}
        hasError={errors.spouseSupportKids?.hasError}
        {...getOverrideProps(overrides, "spouseSupportKids")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "spouseSupportKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "spouseSupportKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "spouseSupportKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "spouseSupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids: value,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportKids ?? value;
          }
          if (errors.helperSupportKids?.hasError) {
            runValidationTasks("helperSupportKids", value);
          }
          setHelperSupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportKids", helperSupportKids)
        }
        errorMessage={errors.helperSupportKids?.errorMessage}
        hasError={errors.helperSupportKids?.hasError}
        {...getOverrideProps(overrides, "helperSupportKids")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "helperSupportKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "helperSupportKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "helperSupportKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "helperSupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Family support kids"
        placeholder="Please select an option"
        isDisabled={false}
        value={familySupportKids}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids: value,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.familySupportKids ?? value;
          }
          if (errors.familySupportKids?.hasError) {
            runValidationTasks("familySupportKids", value);
          }
          setFamilySupportKids(value);
        }}
        onBlur={() =>
          runValidationTasks("familySupportKids", familySupportKids)
        }
        errorMessage={errors.familySupportKids?.errorMessage}
        hasError={errors.familySupportKids?.hasError}
        {...getOverrideProps(overrides, "familySupportKids")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "familySupportKidsoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "familySupportKidsoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "familySupportKidsoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "familySupportKidsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Spouse support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={spouseSupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold: value,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.spouseSupportHousehold ?? value;
          }
          if (errors.spouseSupportHousehold?.hasError) {
            runValidationTasks("spouseSupportHousehold", value);
          }
          setSpouseSupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("spouseSupportHousehold", spouseSupportHousehold)
        }
        errorMessage={errors.spouseSupportHousehold?.errorMessage}
        hasError={errors.spouseSupportHousehold?.hasError}
        {...getOverrideProps(overrides, "spouseSupportHousehold")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "spouseSupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold: value,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportHousehold ?? value;
          }
          if (errors.helperSupportHousehold?.hasError) {
            runValidationTasks("helperSupportHousehold", value);
          }
          setHelperSupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportHousehold", helperSupportHousehold)
        }
        errorMessage={errors.helperSupportHousehold?.errorMessage}
        hasError={errors.helperSupportHousehold?.hasError}
        {...getOverrideProps(overrides, "helperSupportHousehold")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "helperSupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Family support household"
        placeholder="Please select an option"
        isDisabled={false}
        value={familySupportHousehold}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold: value,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.familySupportHousehold ?? value;
          }
          if (errors.familySupportHousehold?.hasError) {
            runValidationTasks("familySupportHousehold", value);
          }
          setFamilySupportHousehold(value);
        }}
        onBlur={() =>
          runValidationTasks("familySupportHousehold", familySupportHousehold)
        }
        errorMessage={errors.familySupportHousehold?.errorMessage}
        hasError={errors.familySupportHousehold?.hasError}
        {...getOverrideProps(overrides, "familySupportHousehold")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "familySupportHouseholdoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "familySupportHouseholdoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "familySupportHouseholdoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "familySupportHouseholdoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={careGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving: value,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.careGiving ?? value;
          }
          if (errors.careGiving?.hasError) {
            runValidationTasks("careGiving", value);
          }
          setCareGiving(value);
        }}
        onBlur={() => runValidationTasks("careGiving", careGiving)}
        errorMessage={errors.careGiving?.errorMessage}
        hasError={errors.careGiving?.hasError}
        {...getOverrideProps(overrides, "careGiving")}
      >
        <option
          children="Yes 1"
          value="YES_1"
          {...getOverrideProps(overrides, "careGivingoption0")}
        ></option>
        <option
          children="No 2"
          value="No_2"
          {...getOverrideProps(overrides, "careGivingoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Extent of care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={extentOfCareGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving: value,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.extentOfCareGiving ?? value;
          }
          if (errors.extentOfCareGiving?.hasError) {
            runValidationTasks("extentOfCareGiving", value);
          }
          setExtentOfCareGiving(value);
        }}
        onBlur={() =>
          runValidationTasks("extentOfCareGiving", extentOfCareGiving)
        }
        errorMessage={errors.extentOfCareGiving?.errorMessage}
        hasError={errors.extentOfCareGiving?.hasError}
        {...getOverrideProps(overrides, "extentOfCareGiving")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "extentOfCareGivingoption0")}
        ></option>
        <option
          children="Monitoring is enough 3"
          value="Monitoring_is_enough_3"
          {...getOverrideProps(overrides, "extentOfCareGivingoption1")}
        ></option>
        <option
          children="Completely dependnet 1"
          value="Completely_dependnet_1"
          {...getOverrideProps(overrides, "extentOfCareGivingoption2")}
        ></option>
        <option
          children="Partial care 2"
          value="Partial_care_2"
          {...getOverrideProps(overrides, "extentOfCareGivingoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Helper support care giving"
        placeholder="Please select an option"
        isDisabled={false}
        value={helperSupportCareGiving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving: value,
              readyToExtendSupport,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.helperSupportCareGiving ?? value;
          }
          if (errors.helperSupportCareGiving?.hasError) {
            runValidationTasks("helperSupportCareGiving", value);
          }
          setHelperSupportCareGiving(value);
        }}
        onBlur={() =>
          runValidationTasks("helperSupportCareGiving", helperSupportCareGiving)
        }
        errorMessage={errors.helperSupportCareGiving?.errorMessage}
        hasError={errors.helperSupportCareGiving?.hasError}
        {...getOverrideProps(overrides, "helperSupportCareGiving")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "helperSupportCareGivingoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Ready to extend support"
        placeholder="Please select an option"
        isDisabled={false}
        value={readyToExtendSupport}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport: value,
              OtherCommitments,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.readyToExtendSupport ?? value;
          }
          if (errors.readyToExtendSupport?.hasError) {
            runValidationTasks("readyToExtendSupport", value);
          }
          setReadyToExtendSupport(value);
        }}
        onBlur={() =>
          runValidationTasks("readyToExtendSupport", readyToExtendSupport)
        }
        errorMessage={errors.readyToExtendSupport?.errorMessage}
        hasError={errors.readyToExtendSupport?.hasError}
        {...getOverrideProps(overrides, "readyToExtendSupport")}
      >
        <option
          children="Not applicable 0"
          value="Not_Applicable_0"
          {...getOverrideProps(overrides, "readyToExtendSupportoption0")}
        ></option>
        <option
          children="Weak 1"
          value="Weak_1"
          {...getOverrideProps(overrides, "readyToExtendSupportoption1")}
        ></option>
        <option
          children="Medium 2"
          value="Medium_2"
          {...getOverrideProps(overrides, "readyToExtendSupportoption2")}
        ></option>
        <option
          children="Strong 3"
          value="Strong_3"
          {...getOverrideProps(overrides, "readyToExtendSupportoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Other commitments"
        placeholder="Please select an option"
        isDisabled={false}
        value={OtherCommitments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments: value,
              comment,
            };
            const result = onChange(modelFields);
            value = result?.OtherCommitments ?? value;
          }
          if (errors.OtherCommitments?.hasError) {
            runValidationTasks("OtherCommitments", value);
          }
          setOtherCommitments(value);
        }}
        onBlur={() => runValidationTasks("OtherCommitments", OtherCommitments)}
        errorMessage={errors.OtherCommitments?.errorMessage}
        hasError={errors.OtherCommitments?.hasError}
        {...getOverrideProps(overrides, "OtherCommitments")}
      >
        <option
          children="None few 0"
          value="None_Few_0"
          {...getOverrideProps(overrides, "OtherCommitmentsoption0")}
        ></option>
        <option
          children="Many 1"
          value="Many_1"
          {...getOverrideProps(overrides, "OtherCommitmentsoption1")}
        ></option>
        <option
          children="Moderate manageable 2"
          value="Moderate_Manageable_2"
          {...getOverrideProps(overrides, "OtherCommitmentsoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              candidateName,
              candidateId,
              candidateLocation,
              interviewer,
              interviewDate,
              jobLocation,
              roles,
              interviewerJobLocation,
              typeOfContract,
              driveToWork,
              careerAmbition,
              financialDrive,
              learningReadiness,
              jobSearch,
              jobSuccess,
              lastWorked,
              maritalStatus,
              singleType,
              kidsAge,
              spouseSupportKids,
              helperSupportKids,
              familySupportKids,
              spouseSupportHousehold,
              helperSupportHousehold,
              familySupportHousehold,
              careGiving,
              extentOfCareGiving,
              helperSupportCareGiving,
              readyToExtendSupport,
              OtherCommitments,
              comment: value,
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
