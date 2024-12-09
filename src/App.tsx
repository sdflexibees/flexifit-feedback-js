import { useEffect } from "react";
import type { FSchema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {FlexifitFeedbackCreateForm } from "./ui-components" ;
import { withAuthenticator } from '@aws-amplify/ui-react';

const client = generateClient<FSchema>();

function App() {
  // const [todos, setFlexiFitFeedbacks] = useState<Array<FSchema["FlexifitFeedback"]["type"][]>>([]);

  useEffect(() => {
    client.models.FlexifitFeedback.observeQuery().subscribe({
      // next: (data: { items: any; }) => setFlexiFitFeedbacks([...data.items]),
    });
  }, []);

  
  return (
    <main>
      
    <div>
    {/* <AmplifySignOut /> */}
    <h1>My Feedback</h1>
    <FlexifitFeedbackCreateForm /></div>
   </main>
  );
}

export default withAuthenticator(App);
