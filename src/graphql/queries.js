/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFlexifitModel = /* GraphQL */ `
  query GetFlexifitModel($id: ID!) {
    getFlexifitModel(id: $id) {
      id
      candidateid
      candidateName
      interviewerName
      interviewDate
      candidateLocation
      candidateJobPreference
      maritalStatus
      singleType
      ageOfYoungestKid
      spouseSupportForKids
      spouseSupportForHousehold
      helperSupportForKids
      helperSupportForHouseHold
      otherSupportForKids
      otherSupportForHouseHold
      readyToExtendSupport
      caregiving
      supportForCareGiving
      Responsibilities
      TypeOfContract
      DriveToWork
      ImmediateCareerAmbitions
      FinancialDriveToWork
      LearningReadiness
      JobSearchReadiness
      JobSearchSuccess
      LastWorked
      TypeOfRole
      Role_Interviewer
      OtherCommitments
      Interviewer_Proposed_Availability
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFlexifitModels = /* GraphQL */ `
  query ListFlexifitModels(
    $filter: ModelFlexifitModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFlexifitModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        candidateid
        candidateName
        interviewerName
        interviewDate
        candidateLocation
        candidateJobPreference
        maritalStatus
        singleType
        ageOfYoungestKid
        spouseSupportForKids
        spouseSupportForHousehold
        helperSupportForKids
        helperSupportForHouseHold
        otherSupportForKids
        otherSupportForHouseHold
        readyToExtendSupport
        caregiving
        supportForCareGiving
        Responsibilities
        TypeOfContract
        DriveToWork
        ImmediateCareerAmbitions
        FinancialDriveToWork
        LearningReadiness
        JobSearchReadiness
        JobSearchSuccess
        LastWorked
        TypeOfRole
        Role_Interviewer
        OtherCommitments
        Interviewer_Proposed_Availability
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
