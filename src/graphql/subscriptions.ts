/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFlexifitModel = /* GraphQL */ `subscription OnCreateFlexifitModel(
  $filter: ModelSubscriptionFlexifitModelFilterInput
) {
  onCreateFlexifitModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFlexifitModelSubscriptionVariables,
  APITypes.OnCreateFlexifitModelSubscription
>;
export const onUpdateFlexifitModel = /* GraphQL */ `subscription OnUpdateFlexifitModel(
  $filter: ModelSubscriptionFlexifitModelFilterInput
) {
  onUpdateFlexifitModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFlexifitModelSubscriptionVariables,
  APITypes.OnUpdateFlexifitModelSubscription
>;
export const onDeleteFlexifitModel = /* GraphQL */ `subscription OnDeleteFlexifitModel(
  $filter: ModelSubscriptionFlexifitModelFilterInput
) {
  onDeleteFlexifitModel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFlexifitModelSubscriptionVariables,
  APITypes.OnDeleteFlexifitModelSubscription
>;
