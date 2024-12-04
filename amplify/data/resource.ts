import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import {roleEnum, contractEnum, commitmentsEnum, supportEnum} from "./schema";

/*== STEP 1 ===============================================================
The section below creates a FlexifitFeedback database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "FlexifitFeedback" records.
=========================================================================*/
const schema = a.schema({
  FlexifitFeedback: a
    .model({
      candidateName : a.string(),
      candidateId : a.string(),
      candidateLocation : a.string(),
      interviewer : a.string(),
      interviewDate : a.date(),
      jobLocation: a.string(),
      roles : a.string (),
      interviewerJobLocation: a.string(),
      typeOfContract: a.string(),
      driveToWork : a.string(),
      careerAmbition: a.string(),
      financialDrive: a.string(),
      learningReadiness: a.string(),
      jobSearch : a.string(),
      jobSuccess: a.string(),
      lastWorked: a.string(),
      maritalStatus: a.string(),
      singleType: a.string(),
      kidsAge: a.string(),
      spouseSupportKids: a.string(),
      helperSupportKids: a.string(),
      familySupportKids: a.string(),
      spouseSupportHousehold: a.string(),
      helperSupportHousehold: a.string(),
      familySupportHousehold: a.string(),
      
      careGiving: a.string(),
      extentOfCareGiving: a.string(),
      helperSupportCareGiving: a.string(),
      readyToExtendSupport: a.string(),
      OtherCommitments: a.string(),
      
      // roles : a.enum (roleEnum),
      // interviewerJobLocation: a.enum(locationEnum),
      // typeOfContract: a.enum(contractEnum),
      // driveToWork : a.enum(workEnum),
      // careerAmbition: a.enum(careerEnum),
      // financialDrive: a.enum(financeEnum),
      // learningReadiness: a.enum(learningEnum),
      // jobSearch : a.enum(searchEnum),
      // jobSuccess: a.enum(searchResultEnum),
      // lastWorked: a.enum(recencyEnum),
      // maritalStatus: a.enum(maritalEnum),
      // singleType: a.enum(singleTypeEnum),
      // kidsAge: a.enum(ageEnum),
      // spouseSupportKids: a.enum(supportEnum),
      // helperSupportKids: a.enum(supportEnum),
      // familySupportKids: a.enum(supportEnum),
      // spouseSupportHousehold: a.enum(supportEnum),
      // helperSupportHousehold: a.enum(supportEnum),
      // familySupportHousehold: a.enum(supportEnum),
      
      // careGiving: a.enum(careEnum),
      // extentOfCareGiving: a.enum(extentEnum),
      // helperSupportCareGiving: a.enum(supportEnum),
      // readyToExtendSupport: a.enum(supportEnum),
      // OtherCommitments: a.enum(commitmentsEnum),
      // comment : a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});



export type FSchema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */

//  const { data: todos } = await client.models.FlexifitFeedback.list()

//  return <div>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</div>
