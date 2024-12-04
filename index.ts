import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum Agerange {
  NO_KIDS_0 = "NO_KIDS_0",
  YRS_0_5_1 = "YRS_0_5_1",
  YRS_12_16_3 = "YRS_12_16_3",
  YRS_16_PLUS_4 = "YRS_16_PLUS_4",
  YRS_5_12_2 = "YRS_5_12_2"
}

export enum Careerambition {
  LONGTERM_1 = "LONGTERM_1",
  REDUCE_GAP_3 = "REDUCE_GAP_3",
  UTILISE_FREE_TIME_2 = "UTILISE_FREE_TIME_2",
  WFH_FLEXIBILITY_3 = "WFH_FLEXIBILITY_3"
}

export enum CareGivingExtent {
  COMPLETELY_DEPENEDNET_1 = "COMPLETELY_DEPENEDNET_1",
  MONITORING_IS_ENOUGH_3 = "MONITORING_IS_ENOUGH_3",
  NA_0 = "NA_0",
  PART_CARE_2 = "PART_CARE_2"
}

export enum Commitments {
  MANY_1 = "MANY_1",
  MODERATE_MANAGEABLE_2 = "MODERATE_MANAGEABLE_2",
  N0_FEW_3 = "N0_FEW_3"
}

export enum ContractType {
  LONGTERM_1 = "LONGTERM_1",
  SHORTTERM_2 = "SHORTTERM_2"
}

export enum Drive {
  HIGH_BUT_NOTDOING_2 = "HIGH_BUT_NOTDOING_2",
  LOW_1 = "LOW_1",
  VERY_HIGH_3 = "VERY_HIGH_3"
}

export enum Finacialdrive {
  MAJOR_3 = "MAJOR_3",
  MINOR_2 = "MINOR_2",
  SELF_EXPENSE_1 = "SELF_EXPENSE_1"
}

export enum Jobrecency {
  BETEWEEN_2_5_YRS_2 = "BETEWEEN_2_5_YRS_2",
  LESS_2_YRS_3 = "LESS_2_YRS_3",
  MORE_5_YRS_1 = "MORE_5_YRS_1"
}

export enum JobLocation {
  HYBRID = "HYBRID",
  OFFICE = "OFFICE",
  REMOTE = "REMOTE"
}

export enum JobReadiness {
  JOB_SEARCH_INACTIVE_1 = "JOB_SEARCH_INACTIVE_1",
  LOOKING_VERY_ACTIVELY_3 = "LOOKING_VERY_ACTIVELY_3",
  MODERATELY_SEARCHING_2 = "MODERATELY_SEARCHING_2"
}

export enum JobSearchResults {
  NOT_MANY_CALLBACK_3 = "NOT_MANY_CALLBACK_3",
  RECEIVED_FAIR_NUMEBER_1 = "RECEIVED_FAIR_NUMEBER_1"
}

export enum Learningreadiness {
  LEARNING_ESSENTIAL_1 = "LEARNING_ESSENTIAL_1",
  SATISFIED_WITH_WORK_2 = "SATISFIED_WITH_WORK_2"
}

export enum Marital {
  MARRIED_2 = "MARRIED_2",
  NA_0 = "NA_0",
  SINGLE_1 = "SINGLE_1"
}

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export enum Responsibilities {
  INDIVIDUAL_CONTRIBUTOR_3 = "INDIVIDUAL_CONTRIBUTOR_3",
  PROJECT_MANAGER_2 = "PROJECT_MANAGER_2",
  TEAM_MEMBER_4 = "TEAM_MEMBER_4",
  TEAM_MGMT_1 = "TEAM_MGMT_1"
}

export enum SingleType {
  DIVORCED_WIDOWED_2 = "DIVORCED_WIDOWED_2",
  NA_0 = "NA_0",
  UNMARRIED_1 = "UNMARRIED_1"
}

export enum SupportRange {
  MEDIUM_2 = "MEDIUM_2",
  NOT_APPLICABLE_0 = "NOT_APPLICABLE_0",
  STRONG_3 = "STRONG_3",
  WEAK_1 = "WEAK_1"
}

export enum TypeOfJobByInterviewer {
  FULLTIME_HYBRID_1 = "FULLTIME_HYBRID_1",
  FULLTIME_OFFICE_0 = "FULLTIME_OFFICE_0",
  FULLTIME_WFH_3 = "FULLTIME_WFH_3",
  PARTTIME_HYBRID_1 = "PARTTIME_HYBRID_1",
  PARTTIME_OFFICE_0 = "PARTTIME_OFFICE_0",
  PARTTIME_WFH_3 = "PARTTIME_WFH_3"
}

export enum Yesno {
  NO_0 = "NO_0",
  YES_1 = "YES_1"
}



type EagerFlexifitModelModel = {
  readonly DriveToWork?: Drive | keyof typeof Drive | null;
  readonly FinancialDriveToWork?: Finacialdrive | keyof typeof Finacialdrive | null;
  readonly ImmediateCareerAmbitions?: Careerambition | keyof typeof Careerambition | null;
  readonly Interviewer_Proposed_Availability?: number | null;
  readonly JobSearchReadiness?: JobReadiness | keyof typeof JobReadiness | null;
  readonly JobSearchSuccess?: JobSearchResults | keyof typeof JobSearchResults | null;
  readonly LastWorked?: Jobrecency | keyof typeof Jobrecency | null;
  readonly LearningReadiness?: Learningreadiness | keyof typeof Learningreadiness | null;
  readonly OtherCommitments?: Commitments | keyof typeof Commitments | null;
  readonly Responsibilities?: Responsibilities | keyof typeof Responsibilities | null;
  readonly Role_Interviewer?: TypeOfJobByInterviewer | keyof typeof TypeOfJobByInterviewer | null;
  readonly TypeOfContract?: ContractType | keyof typeof ContractType | null;
  readonly TypeOfRole?: TypeOfJobByInterviewer | keyof typeof TypeOfJobByInterviewer | null;
  readonly ageOfYoungestKid?: Agerange | keyof typeof Agerange | null;
  readonly candidateJobPreference?: JobLocation | keyof typeof JobLocation | null;
  readonly candidateLocation?: string | null;
  readonly candidateName?: string | null;
  readonly candidateid: string;
  readonly caregiving?: Yesno | keyof typeof Yesno | null;
  readonly createdAt: string;
  readonly helperSupportForHouseHold?: SupportRange | keyof typeof SupportRange | null;
  readonly helperSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly id: string;
  readonly interviewDate?: string | null;
  readonly interviewerName?: string | null;
  readonly maritalStatus?: Marital | keyof typeof Marital | null;
  readonly otherSupportForHouseHold?: SupportRange | keyof typeof SupportRange | null;
  readonly otherSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly readyToExtendSupport?: SupportRange | keyof typeof SupportRange | null;
  readonly singleType?: SingleType | keyof typeof SingleType | null;
  readonly spouseSupportForHousehold?: SupportRange | keyof typeof SupportRange | null;
  readonly spouseSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly supportForCareGiving?: CareGivingExtent | keyof typeof CareGivingExtent | null;
  readonly updatedAt: string;
}

type LazyFlexifitModelModel = {
  readonly DriveToWork?: Drive | keyof typeof Drive | null;
  readonly FinancialDriveToWork?: Finacialdrive | keyof typeof Finacialdrive | null;
  readonly ImmediateCareerAmbitions?: Careerambition | keyof typeof Careerambition | null;
  readonly Interviewer_Proposed_Availability?: number | null;
  readonly JobSearchReadiness?: JobReadiness | keyof typeof JobReadiness | null;
  readonly JobSearchSuccess?: JobSearchResults | keyof typeof JobSearchResults | null;
  readonly LastWorked?: Jobrecency | keyof typeof Jobrecency | null;
  readonly LearningReadiness?: Learningreadiness | keyof typeof Learningreadiness | null;
  readonly OtherCommitments?: Commitments | keyof typeof Commitments | null;
  readonly Responsibilities?: Responsibilities | keyof typeof Responsibilities | null;
  readonly Role_Interviewer?: TypeOfJobByInterviewer | keyof typeof TypeOfJobByInterviewer | null;
  readonly TypeOfContract?: ContractType | keyof typeof ContractType | null;
  readonly TypeOfRole?: TypeOfJobByInterviewer | keyof typeof TypeOfJobByInterviewer | null;
  readonly ageOfYoungestKid?: Agerange | keyof typeof Agerange | null;
  readonly candidateJobPreference?: JobLocation | keyof typeof JobLocation | null;
  readonly candidateLocation?: string | null;
  readonly candidateName?: string | null;
  readonly candidateid: string;
  readonly caregiving?: Yesno | keyof typeof Yesno | null;
  readonly createdAt: string;
  readonly helperSupportForHouseHold?: SupportRange | keyof typeof SupportRange | null;
  readonly helperSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly id: string;
  readonly interviewDate?: string | null;
  readonly interviewerName?: string | null;
  readonly maritalStatus?: Marital | keyof typeof Marital | null;
  readonly otherSupportForHouseHold?: SupportRange | keyof typeof SupportRange | null;
  readonly otherSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly readyToExtendSupport?: SupportRange | keyof typeof SupportRange | null;
  readonly singleType?: SingleType | keyof typeof SingleType | null;
  readonly spouseSupportForHousehold?: SupportRange | keyof typeof SupportRange | null;
  readonly spouseSupportForKids?: SupportRange | keyof typeof SupportRange | null;
  readonly supportForCareGiving?: CareGivingExtent | keyof typeof CareGivingExtent | null;
  readonly updatedAt: string;
}

export declare type FlexifitModelModel = LazyLoading extends LazyLoadingDisabled ? EagerFlexifitModelModel : LazyFlexifitModelModel

export declare const FlexifitModelModel: (new (init: ModelInit<FlexifitModelModel>) => FlexifitModelModel)

type EagerModelFlexifitModelConnectionModel = {
  readonly items: (FlexifitModel | null)[];
  readonly nextToken?: string | null;
}

type LazyModelFlexifitModelConnectionModel = {
  readonly items: (FlexifitModel | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelFlexifitModelConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelFlexifitModelConnectionModel : LazyModelFlexifitModelConnectionModel

export declare const ModelFlexifitModelConnectionModel: (new (init: ModelInit<ModelFlexifitModelConnectionModel>) => ModelFlexifitModelConnectionModel)

const { FlexifitModel, ModelFlexifitModelConnection } = initSchema(schema) as {
  FlexifitModel: PersistentModelConstructor<FlexifitModelModel>;
  ModelFlexifitModelConnection: PersistentModelConstructor<ModelFlexifitModelConnectionModel>;
};

export {
  
};