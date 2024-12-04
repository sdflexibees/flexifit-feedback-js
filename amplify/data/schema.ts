import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
// import {EnumType} from "@aws-amplify";
export enum roleEnum{
  "Team_Member_1",
  "Team_Manager_4",
  "Individual_Contributor_3"
}

export enum locationEnum{
  Part_time_WFH_3,
  Part_time_Office_0,
  Part_time_Hybrid_2,
  Full_time_WFH_3,
  Full_time_Office_1,
  Full_time_Hybrid_2
}
export enum careerAmbition{
  WFH_Flexibility_3,
  Long_term_job_1,
 Utilize_free_Time_2,
  Restart_work_after_break_3,
}

export enum learningEnum{
  learning_is_essential_2,
  satisfaction_work_1
}
export enum financeEnum{
  spend_on_self_1,
  Contribute_household_minor_2,
  Contribute_household_major_3
}
export enum searchEnum{
  Looking_Very_actively_3,
  Moderately_active_2,
  Job_search_Inactive_1

}
export enum searchResultEnum{
  Not_Many_callback_3,
  Received_callback_2

}
export enum recencyEnum{
  Yrs_0_2_3,
  Yrs_More_5_1,
  Yrs_2_5_2

}
export enum ageEnum{
  No_kids_0,
  Yrs_0_5_1,
  Yrs_5_12_2,
  Yrs_12_16_3,
  Yrs_16_plus_4
}
export enum maritalEnum{
 Not_Applicable_0,
 Married_1,
 Single_2
}
export enum singleTypeEnum{
  Not_Applicable_0,
  UnMarried_1,
  Separated_Divorced_2
}

export enum workEnum{
  very_high_3,
  high_2,
  low_1
}
export enum careEnum{
  YES_1,
  No_2
}
export enum extentEnum{
  Not_Applicable_0,
  Monitoring_is_enough_3,
  Completely_dependnet_1,
  Partial_care_2
}
export enum contractEnum{
  "short_term_2",
  "long_term_1"
}
export enum supportEnum{
  Not_Applicable_0,
  Weak_1,
  Medium_2,
  Strong_2
}
  
export enum commitmentsEnum {
  None_Few_0,
  Many_1,
  Moderate_Manageable_2,
  
}