/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFlexifitModelInput = {
  id?: string | null,
  candidateid: string,
  candidateName?: string | null,
  interviewerName?: string | null,
  interviewDate?: string | null,
  candidateLocation?: string | null,
  candidateJobPreference?: JobLocation | null,
  maritalStatus?: Marital | null,
  singleType?: SingleType | null,
  ageOfYoungestKid?: AGERANGE | null,
  spouseSupportForKids?: SupportRange | null,
  spouseSupportForHousehold?: SupportRange | null,
  helperSupportForKids?: SupportRange | null,
  helperSupportForHouseHold?: SupportRange | null,
  otherSupportForKids?: SupportRange | null,
  otherSupportForHouseHold?: SupportRange | null,
  readyToExtendSupport?: SupportRange | null,
  caregiving?: YESNO | null,
  supportForCareGiving?: CareGivingExtent | null,
  Responsibilities?: Responsibilities | null,
  TypeOfContract?: ContractType | null,
  DriveToWork?: Drive | null,
  ImmediateCareerAmbitions?: CAREERAMBITION | null,
  FinancialDriveToWork?: FINACIALDRIVE | null,
  LearningReadiness?: LEARNINGREADINESS | null,
  JobSearchReadiness?: JobReadiness | null,
  JobSearchSuccess?: JobSearchResults | null,
  LastWorked?: JOBRECENCY | null,
  TypeOfRole?: TypeOfJobByInterviewer | null,
  Role_Interviewer?: TypeOfJobByInterviewer | null,
  OtherCommitments?: Commitments | null,
  Interviewer_Proposed_Availability?: number | null,
};

export enum JobLocation {
  REMOTE = "REMOTE",
  OFFICE = "OFFICE",
  HYBRID = "HYBRID",
}


export enum Marital {
  SINGLE_1 = "SINGLE_1",
  MARRIED_2 = "MARRIED_2",
  NA_0 = "NA_0",
}


export enum SingleType {
  NA_0 = "NA_0",
  UNMARRIED_1 = "UNMARRIED_1",
  DIVORCED_WIDOWED_2 = "DIVORCED_WIDOWED_2",
}


export enum AGERANGE {
  NO_KIDS_0 = "NO_KIDS_0",
  YRS_0_5_1 = "YRS_0_5_1",
  YRS_5_12_2 = "YRS_5_12_2",
  YRS_12_16_3 = "YRS_12_16_3",
  YRS_16_PLUS_4 = "YRS_16_PLUS_4",
}


export enum SupportRange {
  NOT_APPLICABLE_0 = "NOT_APPLICABLE_0",
  WEAK_1 = "WEAK_1",
  MEDIUM_2 = "MEDIUM_2",
  STRONG_3 = "STRONG_3",
}


export enum YESNO {
  YES_1 = "YES_1",
  NO_0 = "NO_0",
}


export enum CareGivingExtent {
  NA_0 = "NA_0",
  COMPLETELY_DEPENEDNET_1 = "COMPLETELY_DEPENEDNET_1",
  PART_CARE_2 = "PART_CARE_2",
  MONITORING_IS_ENOUGH_3 = "MONITORING_IS_ENOUGH_3",
}


export enum Responsibilities {
  INDIVIDUAL_CONTRIBUTOR_3 = "INDIVIDUAL_CONTRIBUTOR_3",
  TEAM_MGMT_1 = "TEAM_MGMT_1",
  TEAM_MEMBER_4 = "TEAM_MEMBER_4",
  PROJECT_MANAGER_2 = "PROJECT_MANAGER_2",
}


export enum ContractType {
  SHORTTERM_2 = "SHORTTERM_2",
  LONGTERM_1 = "LONGTERM_1",
}


export enum Drive {
  VERY_HIGH_3 = "VERY_HIGH_3",
  HIGH_BUT_NOTDOING_2 = "HIGH_BUT_NOTDOING_2",
  LOW_1 = "LOW_1",
}


export enum CAREERAMBITION {
  LONGTERM_1 = "LONGTERM_1",
  UTILISE_FREE_TIME_2 = "UTILISE_FREE_TIME_2",
  WFH_FLEXIBILITY_3 = "WFH_FLEXIBILITY_3",
  REDUCE_GAP_3 = "REDUCE_GAP_3",
}


export enum FINACIALDRIVE {
  MAJOR_3 = "MAJOR_3",
  MINOR_2 = "MINOR_2",
  SELF_EXPENSE_1 = "SELF_EXPENSE_1",
}


export enum LEARNINGREADINESS {
  LEARNING_ESSENTIAL_1 = "LEARNING_ESSENTIAL_1",
  SATISFIED_WITH_WORK_2 = "SATISFIED_WITH_WORK_2",
}


export enum JobReadiness {
  LOOKING_VERY_ACTIVELY_3 = "LOOKING_VERY_ACTIVELY_3",
  MODERATELY_SEARCHING_2 = "MODERATELY_SEARCHING_2",
  JOB_SEARCH_INACTIVE_1 = "JOB_SEARCH_INACTIVE_1",
}


export enum JobSearchResults {
  NOT_MANY_CALLBACK_3 = "NOT_MANY_CALLBACK_3",
  RECEIVED_FAIR_NUMEBER_1 = "RECEIVED_FAIR_NUMEBER_1",
}


export enum JOBRECENCY {
  MORE_5_YRS_1 = "MORE_5_YRS_1",
  BETEWEEN_2_5_YRS_2 = "BETEWEEN_2_5_YRS_2",
  LESS_2_YRS_3 = "LESS_2_YRS_3",
}


export enum TypeOfJobByInterviewer {
  PARTTIME_WFH_3 = "PARTTIME_WFH_3",
  PARTTIME_OFFICE_0 = "PARTTIME_OFFICE_0",
  PARTTIME_HYBRID_1 = "PARTTIME_HYBRID_1",
  FULLTIME_WFH_3 = "FULLTIME_WFH_3",
  FULLTIME_HYBRID_1 = "FULLTIME_HYBRID_1",
  FULLTIME_OFFICE_0 = "FULLTIME_OFFICE_0",
}


export enum Commitments {
  N0_FEW_3 = "N0_FEW_3",
  MODERATE_MANAGEABLE_2 = "MODERATE_MANAGEABLE_2",
  MANY_1 = "MANY_1",
}


export type ModelFlexifitModelConditionInput = {
  candidateid?: ModelIDInput | null,
  candidateName?: ModelStringInput | null,
  interviewerName?: ModelStringInput | null,
  interviewDate?: ModelStringInput | null,
  candidateLocation?: ModelStringInput | null,
  candidateJobPreference?: ModelJobLocationInput | null,
  maritalStatus?: ModelMaritalInput | null,
  singleType?: ModelSingleTypeInput | null,
  ageOfYoungestKid?: ModelAGERANGEInput | null,
  spouseSupportForKids?: ModelSupportRangeInput | null,
  spouseSupportForHousehold?: ModelSupportRangeInput | null,
  helperSupportForKids?: ModelSupportRangeInput | null,
  helperSupportForHouseHold?: ModelSupportRangeInput | null,
  otherSupportForKids?: ModelSupportRangeInput | null,
  otherSupportForHouseHold?: ModelSupportRangeInput | null,
  readyToExtendSupport?: ModelSupportRangeInput | null,
  caregiving?: ModelYESNOInput | null,
  supportForCareGiving?: ModelCareGivingExtentInput | null,
  Responsibilities?: ModelResponsibilitiesInput | null,
  TypeOfContract?: ModelContractTypeInput | null,
  DriveToWork?: ModelDriveInput | null,
  ImmediateCareerAmbitions?: ModelCAREERAMBITIONInput | null,
  FinancialDriveToWork?: ModelFINACIALDRIVEInput | null,
  LearningReadiness?: ModelLEARNINGREADINESSInput | null,
  JobSearchReadiness?: ModelJobReadinessInput | null,
  JobSearchSuccess?: ModelJobSearchResultsInput | null,
  LastWorked?: ModelJOBRECENCYInput | null,
  TypeOfRole?: ModelTypeOfJobByInterviewerInput | null,
  Role_Interviewer?: ModelTypeOfJobByInterviewerInput | null,
  OtherCommitments?: ModelCommitmentsInput | null,
  Interviewer_Proposed_Availability?: ModelIntInput | null,
  and?: Array< ModelFlexifitModelConditionInput | null > | null,
  or?: Array< ModelFlexifitModelConditionInput | null > | null,
  not?: ModelFlexifitModelConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobLocationInput = {
  eq?: JobLocation | null,
  ne?: JobLocation | null,
};

export type ModelMaritalInput = {
  eq?: Marital | null,
  ne?: Marital | null,
};

export type ModelSingleTypeInput = {
  eq?: SingleType | null,
  ne?: SingleType | null,
};

export type ModelAGERANGEInput = {
  eq?: AGERANGE | null,
  ne?: AGERANGE | null,
};

export type ModelSupportRangeInput = {
  eq?: SupportRange | null,
  ne?: SupportRange | null,
};

export type ModelYESNOInput = {
  eq?: YESNO | null,
  ne?: YESNO | null,
};

export type ModelCareGivingExtentInput = {
  eq?: CareGivingExtent | null,
  ne?: CareGivingExtent | null,
};

export type ModelResponsibilitiesInput = {
  eq?: Responsibilities | null,
  ne?: Responsibilities | null,
};

export type ModelContractTypeInput = {
  eq?: ContractType | null,
  ne?: ContractType | null,
};

export type ModelDriveInput = {
  eq?: Drive | null,
  ne?: Drive | null,
};

export type ModelCAREERAMBITIONInput = {
  eq?: CAREERAMBITION | null,
  ne?: CAREERAMBITION | null,
};

export type ModelFINACIALDRIVEInput = {
  eq?: FINACIALDRIVE | null,
  ne?: FINACIALDRIVE | null,
};

export type ModelLEARNINGREADINESSInput = {
  eq?: LEARNINGREADINESS | null,
  ne?: LEARNINGREADINESS | null,
};

export type ModelJobReadinessInput = {
  eq?: JobReadiness | null,
  ne?: JobReadiness | null,
};

export type ModelJobSearchResultsInput = {
  eq?: JobSearchResults | null,
  ne?: JobSearchResults | null,
};

export type ModelJOBRECENCYInput = {
  eq?: JOBRECENCY | null,
  ne?: JOBRECENCY | null,
};

export type ModelTypeOfJobByInterviewerInput = {
  eq?: TypeOfJobByInterviewer | null,
  ne?: TypeOfJobByInterviewer | null,
};

export type ModelCommitmentsInput = {
  eq?: Commitments | null,
  ne?: Commitments | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type FlexifitModel = {
  __typename: "FlexifitModel",
  id: string,
  candidateid: string,
  candidateName?: string | null,
  interviewerName?: string | null,
  interviewDate?: string | null,
  candidateLocation?: string | null,
  candidateJobPreference?: JobLocation | null,
  maritalStatus?: Marital | null,
  singleType?: SingleType | null,
  ageOfYoungestKid?: AGERANGE | null,
  spouseSupportForKids?: SupportRange | null,
  spouseSupportForHousehold?: SupportRange | null,
  helperSupportForKids?: SupportRange | null,
  helperSupportForHouseHold?: SupportRange | null,
  otherSupportForKids?: SupportRange | null,
  otherSupportForHouseHold?: SupportRange | null,
  readyToExtendSupport?: SupportRange | null,
  caregiving?: YESNO | null,
  supportForCareGiving?: CareGivingExtent | null,
  Responsibilities?: Responsibilities | null,
  TypeOfContract?: ContractType | null,
  DriveToWork?: Drive | null,
  ImmediateCareerAmbitions?: CAREERAMBITION | null,
  FinancialDriveToWork?: FINACIALDRIVE | null,
  LearningReadiness?: LEARNINGREADINESS | null,
  JobSearchReadiness?: JobReadiness | null,
  JobSearchSuccess?: JobSearchResults | null,
  LastWorked?: JOBRECENCY | null,
  TypeOfRole?: TypeOfJobByInterviewer | null,
  Role_Interviewer?: TypeOfJobByInterviewer | null,
  OtherCommitments?: Commitments | null,
  Interviewer_Proposed_Availability?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFlexifitModelInput = {
  id: string,
  candidateid?: string | null,
  candidateName?: string | null,
  interviewerName?: string | null,
  interviewDate?: string | null,
  candidateLocation?: string | null,
  candidateJobPreference?: JobLocation | null,
  maritalStatus?: Marital | null,
  singleType?: SingleType | null,
  ageOfYoungestKid?: AGERANGE | null,
  spouseSupportForKids?: SupportRange | null,
  spouseSupportForHousehold?: SupportRange | null,
  helperSupportForKids?: SupportRange | null,
  helperSupportForHouseHold?: SupportRange | null,
  otherSupportForKids?: SupportRange | null,
  otherSupportForHouseHold?: SupportRange | null,
  readyToExtendSupport?: SupportRange | null,
  caregiving?: YESNO | null,
  supportForCareGiving?: CareGivingExtent | null,
  Responsibilities?: Responsibilities | null,
  TypeOfContract?: ContractType | null,
  DriveToWork?: Drive | null,
  ImmediateCareerAmbitions?: CAREERAMBITION | null,
  FinancialDriveToWork?: FINACIALDRIVE | null,
  LearningReadiness?: LEARNINGREADINESS | null,
  JobSearchReadiness?: JobReadiness | null,
  JobSearchSuccess?: JobSearchResults | null,
  LastWorked?: JOBRECENCY | null,
  TypeOfRole?: TypeOfJobByInterviewer | null,
  Role_Interviewer?: TypeOfJobByInterviewer | null,
  OtherCommitments?: Commitments | null,
  Interviewer_Proposed_Availability?: number | null,
};

export type DeleteFlexifitModelInput = {
  id: string,
};

export type ModelFlexifitModelFilterInput = {
  id?: ModelIDInput | null,
  candidateid?: ModelIDInput | null,
  candidateName?: ModelStringInput | null,
  interviewerName?: ModelStringInput | null,
  interviewDate?: ModelStringInput | null,
  candidateLocation?: ModelStringInput | null,
  candidateJobPreference?: ModelJobLocationInput | null,
  maritalStatus?: ModelMaritalInput | null,
  singleType?: ModelSingleTypeInput | null,
  ageOfYoungestKid?: ModelAGERANGEInput | null,
  spouseSupportForKids?: ModelSupportRangeInput | null,
  spouseSupportForHousehold?: ModelSupportRangeInput | null,
  helperSupportForKids?: ModelSupportRangeInput | null,
  helperSupportForHouseHold?: ModelSupportRangeInput | null,
  otherSupportForKids?: ModelSupportRangeInput | null,
  otherSupportForHouseHold?: ModelSupportRangeInput | null,
  readyToExtendSupport?: ModelSupportRangeInput | null,
  caregiving?: ModelYESNOInput | null,
  supportForCareGiving?: ModelCareGivingExtentInput | null,
  Responsibilities?: ModelResponsibilitiesInput | null,
  TypeOfContract?: ModelContractTypeInput | null,
  DriveToWork?: ModelDriveInput | null,
  ImmediateCareerAmbitions?: ModelCAREERAMBITIONInput | null,
  FinancialDriveToWork?: ModelFINACIALDRIVEInput | null,
  LearningReadiness?: ModelLEARNINGREADINESSInput | null,
  JobSearchReadiness?: ModelJobReadinessInput | null,
  JobSearchSuccess?: ModelJobSearchResultsInput | null,
  LastWorked?: ModelJOBRECENCYInput | null,
  TypeOfRole?: ModelTypeOfJobByInterviewerInput | null,
  Role_Interviewer?: ModelTypeOfJobByInterviewerInput | null,
  OtherCommitments?: ModelCommitmentsInput | null,
  Interviewer_Proposed_Availability?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFlexifitModelFilterInput | null > | null,
  or?: Array< ModelFlexifitModelFilterInput | null > | null,
  not?: ModelFlexifitModelFilterInput | null,
};

export type ModelFlexifitModelConnection = {
  __typename: "ModelFlexifitModelConnection",
  items:  Array<FlexifitModel | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFlexifitModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  candidateid?: ModelSubscriptionIDInput | null,
  candidateName?: ModelSubscriptionStringInput | null,
  interviewerName?: ModelSubscriptionStringInput | null,
  interviewDate?: ModelSubscriptionStringInput | null,
  candidateLocation?: ModelSubscriptionStringInput | null,
  candidateJobPreference?: ModelSubscriptionStringInput | null,
  maritalStatus?: ModelSubscriptionStringInput | null,
  singleType?: ModelSubscriptionStringInput | null,
  ageOfYoungestKid?: ModelSubscriptionStringInput | null,
  spouseSupportForKids?: ModelSubscriptionStringInput | null,
  spouseSupportForHousehold?: ModelSubscriptionStringInput | null,
  helperSupportForKids?: ModelSubscriptionStringInput | null,
  helperSupportForHouseHold?: ModelSubscriptionStringInput | null,
  otherSupportForKids?: ModelSubscriptionStringInput | null,
  otherSupportForHouseHold?: ModelSubscriptionStringInput | null,
  readyToExtendSupport?: ModelSubscriptionStringInput | null,
  caregiving?: ModelSubscriptionStringInput | null,
  supportForCareGiving?: ModelSubscriptionStringInput | null,
  Responsibilities?: ModelSubscriptionStringInput | null,
  TypeOfContract?: ModelSubscriptionStringInput | null,
  DriveToWork?: ModelSubscriptionStringInput | null,
  ImmediateCareerAmbitions?: ModelSubscriptionStringInput | null,
  FinancialDriveToWork?: ModelSubscriptionStringInput | null,
  LearningReadiness?: ModelSubscriptionStringInput | null,
  JobSearchReadiness?: ModelSubscriptionStringInput | null,
  JobSearchSuccess?: ModelSubscriptionStringInput | null,
  LastWorked?: ModelSubscriptionStringInput | null,
  TypeOfRole?: ModelSubscriptionStringInput | null,
  Role_Interviewer?: ModelSubscriptionStringInput | null,
  OtherCommitments?: ModelSubscriptionStringInput | null,
  Interviewer_Proposed_Availability?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFlexifitModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionFlexifitModelFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateFlexifitModelMutationVariables = {
  input: CreateFlexifitModelInput,
  condition?: ModelFlexifitModelConditionInput | null,
};

export type CreateFlexifitModelMutation = {
  createFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFlexifitModelMutationVariables = {
  input: UpdateFlexifitModelInput,
  condition?: ModelFlexifitModelConditionInput | null,
};

export type UpdateFlexifitModelMutation = {
  updateFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFlexifitModelMutationVariables = {
  input: DeleteFlexifitModelInput,
  condition?: ModelFlexifitModelConditionInput | null,
};

export type DeleteFlexifitModelMutation = {
  deleteFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFlexifitModelQueryVariables = {
  id: string,
};

export type GetFlexifitModelQuery = {
  getFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFlexifitModelsQueryVariables = {
  filter?: ModelFlexifitModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFlexifitModelsQuery = {
  listFlexifitModels?:  {
    __typename: "ModelFlexifitModelConnection",
    items:  Array< {
      __typename: "FlexifitModel",
      id: string,
      candidateid: string,
      candidateName?: string | null,
      interviewerName?: string | null,
      interviewDate?: string | null,
      candidateLocation?: string | null,
      candidateJobPreference?: JobLocation | null,
      maritalStatus?: Marital | null,
      singleType?: SingleType | null,
      ageOfYoungestKid?: AGERANGE | null,
      spouseSupportForKids?: SupportRange | null,
      spouseSupportForHousehold?: SupportRange | null,
      helperSupportForKids?: SupportRange | null,
      helperSupportForHouseHold?: SupportRange | null,
      otherSupportForKids?: SupportRange | null,
      otherSupportForHouseHold?: SupportRange | null,
      readyToExtendSupport?: SupportRange | null,
      caregiving?: YESNO | null,
      supportForCareGiving?: CareGivingExtent | null,
      Responsibilities?: Responsibilities | null,
      TypeOfContract?: ContractType | null,
      DriveToWork?: Drive | null,
      ImmediateCareerAmbitions?: CAREERAMBITION | null,
      FinancialDriveToWork?: FINACIALDRIVE | null,
      LearningReadiness?: LEARNINGREADINESS | null,
      JobSearchReadiness?: JobReadiness | null,
      JobSearchSuccess?: JobSearchResults | null,
      LastWorked?: JOBRECENCY | null,
      TypeOfRole?: TypeOfJobByInterviewer | null,
      Role_Interviewer?: TypeOfJobByInterviewer | null,
      OtherCommitments?: Commitments | null,
      Interviewer_Proposed_Availability?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFlexifitModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlexifitModelFilterInput | null,
};

export type OnCreateFlexifitModelSubscription = {
  onCreateFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFlexifitModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlexifitModelFilterInput | null,
};

export type OnUpdateFlexifitModelSubscription = {
  onUpdateFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFlexifitModelSubscriptionVariables = {
  filter?: ModelSubscriptionFlexifitModelFilterInput | null,
};

export type OnDeleteFlexifitModelSubscription = {
  onDeleteFlexifitModel?:  {
    __typename: "FlexifitModel",
    id: string,
    candidateid: string,
    candidateName?: string | null,
    interviewerName?: string | null,
    interviewDate?: string | null,
    candidateLocation?: string | null,
    candidateJobPreference?: JobLocation | null,
    maritalStatus?: Marital | null,
    singleType?: SingleType | null,
    ageOfYoungestKid?: AGERANGE | null,
    spouseSupportForKids?: SupportRange | null,
    spouseSupportForHousehold?: SupportRange | null,
    helperSupportForKids?: SupportRange | null,
    helperSupportForHouseHold?: SupportRange | null,
    otherSupportForKids?: SupportRange | null,
    otherSupportForHouseHold?: SupportRange | null,
    readyToExtendSupport?: SupportRange | null,
    caregiving?: YESNO | null,
    supportForCareGiving?: CareGivingExtent | null,
    Responsibilities?: Responsibilities | null,
    TypeOfContract?: ContractType | null,
    DriveToWork?: Drive | null,
    ImmediateCareerAmbitions?: CAREERAMBITION | null,
    FinancialDriveToWork?: FINACIALDRIVE | null,
    LearningReadiness?: LEARNINGREADINESS | null,
    JobSearchReadiness?: JobReadiness | null,
    JobSearchSuccess?: JobSearchResults | null,
    LastWorked?: JOBRECENCY | null,
    TypeOfRole?: TypeOfJobByInterviewer | null,
    Role_Interviewer?: TypeOfJobByInterviewer | null,
    OtherCommitments?: Commitments | null,
    Interviewer_Proposed_Availability?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
