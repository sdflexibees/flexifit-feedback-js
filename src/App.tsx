import { useEffect, useState } from "react";
import type { FSchema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import {FlexifitFeedbackCreateForm } from "./ui-components" ;


const client = generateClient<FSchema>();

function App() {
  const [todos, setFlexiFitFeedbacks] = useState<Array<FSchema["FlexifitFeedback"]["type"][]>>([]);

  useEffect(() => {
    client.models.FlexifitFeedback.observeQuery().subscribe({
      next: (data: { items: any; }) => setFlexiFitFeedbacks([...data.items]),
    });
  }, []);

  function createFlexiFitFeedback() {
    console.log("Creating function")
    // client.models.FlexifitFeedback.create();
  }

  return (
    <main>
      <h1>My Feedback</h1>
      <FlexifitFeedbackCreateForm />
    
    </main>
  );
}

export default App;
