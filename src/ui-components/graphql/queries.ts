/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlexifitFeedback = /* GraphQL */ `
  query GetFlexifitFeedback($id: ID!) {
    getFlexifitFeedback(id: $id) {
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
export const listFlexifitFeedbacks = /* GraphQL */ `
  query ListFlexifitFeedbacks(
    $filter: ModelFlexifitFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlexifitFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
