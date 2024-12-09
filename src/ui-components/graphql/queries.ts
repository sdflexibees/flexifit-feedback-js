/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlexifitFeedback = /* GraphQL */ `
  query GetFlexifitFeedback($id: ID!) {
    getFlexifitFeedback(id: $id) {
      OtherCommitments
      candidateId
      candidateLocation
      candidateName
      careGiving
      careerAmbition
      comment
      createdAt
      driveToWork
      extentOfCareGiving
      familySupportHousehold
      familySupportKids
      financialDrive
      helperSupportCareGiving
      helperSupportHousehold
      helperSupportKids
      id
      interviewDate
      interviewer
      interviewerJobLocation
      jobLocation
      jobSearch
      jobSuccess
      kidsAge
      lastWorked
      learningReadiness
      maritalStatus
      readyToExtendSupport
      roles
      singleType
      spouseSupportHousehold
      spouseSupportKids
      typeOfContract
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
        OtherCommitments
        candidateId
        candidateLocation
        candidateName
        careGiving
        careerAmbition
        comment
        createdAt
        driveToWork
        extentOfCareGiving
        familySupportHousehold
        familySupportKids
        financialDrive
        helperSupportCareGiving
        helperSupportHousehold
        helperSupportKids
        id
        interviewDate
        interviewer
        interviewerJobLocation
        jobLocation
        jobSearch
        jobSuccess
        kidsAge
        lastWorked
        learningReadiness
        maritalStatus
        readyToExtendSupport
        roles
        singleType
        spouseSupportHousehold
        spouseSupportKids
        typeOfContract
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
