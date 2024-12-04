import { Schema } from "@aws-amplify/datastore";

export const schema: Schema = {
    "models": {},
    "enums": {
        "Agerange": {
            "name": "Agerange",
            "values": [
                "NO_KIDS_0",
                "YRS_0_5_1",
                "YRS_12_16_3",
                "YRS_16_PLUS_4",
                "YRS_5_12_2"
            ]
        },
        "Careerambition": {
            "name": "Careerambition",
            "values": [
                "LONGTERM_1",
                "REDUCE_GAP_3",
                "UTILISE_FREE_TIME_2",
                "WFH_FLEXIBILITY_3"
            ]
        },
        "CareGivingExtent": {
            "name": "CareGivingExtent",
            "values": [
                "COMPLETELY_DEPENEDNET_1",
                "MONITORING_IS_ENOUGH_3",
                "NA_0",
                "PART_CARE_2"
            ]
        },
        "Commitments": {
            "name": "Commitments",
            "values": [
                "MANY_1",
                "MODERATE_MANAGEABLE_2",
                "N0_FEW_3"
            ]
        },
        "ContractType": {
            "name": "ContractType",
            "values": [
                "LONGTERM_1",
                "SHORTTERM_2"
            ]
        },
        "Drive": {
            "name": "Drive",
            "values": [
                "HIGH_BUT_NOTDOING_2",
                "LOW_1",
                "VERY_HIGH_3"
            ]
        },
        "Finacialdrive": {
            "name": "Finacialdrive",
            "values": [
                "MAJOR_3",
                "MINOR_2",
                "SELF_EXPENSE_1"
            ]
        },
        "Jobrecency": {
            "name": "Jobrecency",
            "values": [
                "BETEWEEN_2_5_YRS_2",
                "LESS_2_YRS_3",
                "MORE_5_YRS_1"
            ]
        },
        "JobLocation": {
            "name": "JobLocation",
            "values": [
                "HYBRID",
                "OFFICE",
                "REMOTE"
            ]
        },
        "JobReadiness": {
            "name": "JobReadiness",
            "values": [
                "JOB_SEARCH_INACTIVE_1",
                "LOOKING_VERY_ACTIVELY_3",
                "MODERATELY_SEARCHING_2"
            ]
        },
        "JobSearchResults": {
            "name": "JobSearchResults",
            "values": [
                "NOT_MANY_CALLBACK_3",
                "RECEIVED_FAIR_NUMEBER_1"
            ]
        },
        "Learningreadiness": {
            "name": "Learningreadiness",
            "values": [
                "LEARNING_ESSENTIAL_1",
                "SATISFIED_WITH_WORK_2"
            ]
        },
        "Marital": {
            "name": "Marital",
            "values": [
                "MARRIED_2",
                "NA_0",
                "SINGLE_1"
            ]
        },
        "ModelAttributeTypes": {
            "name": "ModelAttributeTypes",
            "values": [
                "_null",
                "binary",
                "binarySet",
                "bool",
                "list",
                "map",
                "number",
                "numberSet",
                "string",
                "stringSet"
            ]
        },
        "ModelSortDirection": {
            "name": "ModelSortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        },
        "Responsibilities": {
            "name": "Responsibilities",
            "values": [
                "INDIVIDUAL_CONTRIBUTOR_3",
                "PROJECT_MANAGER_2",
                "TEAM_MEMBER_4",
                "TEAM_MGMT_1"
            ]
        },
        "SingleType": {
            "name": "SingleType",
            "values": [
                "DIVORCED_WIDOWED_2",
                "NA_0",
                "UNMARRIED_1"
            ]
        },
        "SupportRange": {
            "name": "SupportRange",
            "values": [
                "MEDIUM_2",
                "NOT_APPLICABLE_0",
                "STRONG_3",
                "WEAK_1"
            ]
        },
        "TypeOfJobByInterviewer": {
            "name": "TypeOfJobByInterviewer",
            "values": [
                "FULLTIME_HYBRID_1",
                "FULLTIME_OFFICE_0",
                "FULLTIME_WFH_3",
                "PARTTIME_HYBRID_1",
                "PARTTIME_OFFICE_0",
                "PARTTIME_WFH_3"
            ]
        },
        "Yesno": {
            "name": "Yesno",
            "values": [
                "NO_0",
                "YES_1"
            ]
        }
    },
    "nonModels": {
        "FlexifitModel": {
            "name": "FlexifitModel",
            "fields": {
                "DriveToWork": {
                    "name": "DriveToWork",
                    "isArray": false,
                    "type": {
                        "enum": "Drive"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "FinancialDriveToWork": {
                    "name": "FinancialDriveToWork",
                    "isArray": false,
                    "type": {
                        "enum": "Finacialdrive"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ImmediateCareerAmbitions": {
                    "name": "ImmediateCareerAmbitions",
                    "isArray": false,
                    "type": {
                        "enum": "Careerambition"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Interviewer_Proposed_Availability": {
                    "name": "Interviewer_Proposed_Availability",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "JobSearchReadiness": {
                    "name": "JobSearchReadiness",
                    "isArray": false,
                    "type": {
                        "enum": "JobReadiness"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "JobSearchSuccess": {
                    "name": "JobSearchSuccess",
                    "isArray": false,
                    "type": {
                        "enum": "JobSearchResults"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "LastWorked": {
                    "name": "LastWorked",
                    "isArray": false,
                    "type": {
                        "enum": "Jobrecency"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "LearningReadiness": {
                    "name": "LearningReadiness",
                    "isArray": false,
                    "type": {
                        "enum": "Learningreadiness"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "OtherCommitments": {
                    "name": "OtherCommitments",
                    "isArray": false,
                    "type": {
                        "enum": "Commitments"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Responsibilities": {
                    "name": "Responsibilities",
                    "isArray": false,
                    "type": {
                        "enum": "Responsibilities"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Role_Interviewer": {
                    "name": "Role_Interviewer",
                    "isArray": false,
                    "type": {
                        "enum": "TypeOfJobByInterviewer"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "TypeOfContract": {
                    "name": "TypeOfContract",
                    "isArray": false,
                    "type": {
                        "enum": "ContractType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "TypeOfRole": {
                    "name": "TypeOfRole",
                    "isArray": false,
                    "type": {
                        "enum": "TypeOfJobByInterviewer"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ageOfYoungestKid": {
                    "name": "ageOfYoungestKid",
                    "isArray": false,
                    "type": {
                        "enum": "Agerange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "candidateJobPreference": {
                    "name": "candidateJobPreference",
                    "isArray": false,
                    "type": {
                        "enum": "JobLocation"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "candidateLocation": {
                    "name": "candidateLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "candidateName": {
                    "name": "candidateName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "candidateid": {
                    "name": "candidateid",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "caregiving": {
                    "name": "caregiving",
                    "isArray": false,
                    "type": {
                        "enum": "Yesno"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "helperSupportForHouseHold": {
                    "name": "helperSupportForHouseHold",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "helperSupportForKids": {
                    "name": "helperSupportForKids",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "interviewDate": {
                    "name": "interviewDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "interviewerName": {
                    "name": "interviewerName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "maritalStatus": {
                    "name": "maritalStatus",
                    "isArray": false,
                    "type": {
                        "enum": "Marital"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "otherSupportForHouseHold": {
                    "name": "otherSupportForHouseHold",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "otherSupportForKids": {
                    "name": "otherSupportForKids",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "readyToExtendSupport": {
                    "name": "readyToExtendSupport",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "singleType": {
                    "name": "singleType",
                    "isArray": false,
                    "type": {
                        "enum": "SingleType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "spouseSupportForHousehold": {
                    "name": "spouseSupportForHousehold",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "spouseSupportForKids": {
                    "name": "spouseSupportForKids",
                    "isArray": false,
                    "type": {
                        "enum": "SupportRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "supportForCareGiving": {
                    "name": "supportForCareGiving",
                    "isArray": false,
                    "type": {
                        "enum": "CareGivingExtent"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "ModelFlexifitModelConnection": {
            "name": "ModelFlexifitModelConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "FlexifitModel"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "645ac499967dece12fc4c25aa7f67236"
};