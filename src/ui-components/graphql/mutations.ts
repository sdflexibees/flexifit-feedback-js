/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFlexifitFeedback = /* GraphQL */ `
  mutation CreateFlexifitFeedback(
    $condition: ModelFlexifitFeedbackConditionInput
    $input: CreateFlexifitFeedbackInput!
  ) {
    createFlexifitFeedback(condition: $condition, input: $input) {
      candidateId
      candidateLocation
      candidateName
      comment
      createdAt
      id
      interviewDate
      interviewer
      updatedAt
      __typename
    }
  }
`;
export const deleteFlexifitFeedback = /* GraphQL */ `
  mutation DeleteFlexifitFeedback(
    $condition: ModelFlexifitFeedbackConditionInput
    $input: DeleteFlexifitFeedbackInput!
  ) {
    deleteFlexifitFeedback(condition: $condition, input: $input) {
      candidateId
      candidateLocation
      candidateName
      comment
      createdAt
      id
      interviewDate
      interviewer
      updatedAt
      __typename
    }
  }
`;
export const updateFlexifitFeedback = /* GraphQL */ `
  mutation UpdateFlexifitFeedback(
    $condition: ModelFlexifitFeedbackConditionInput
    $input: UpdateFlexifitFeedbackInput!
  ) {
    updateFlexifitFeedback(condition: $condition, input: $input) {
      candidateId
      candidateLocation
      candidateName
      comment
      createdAt
      id
      interviewDate
      interviewer
      updatedAt
      __typename
    }
  }
`;
