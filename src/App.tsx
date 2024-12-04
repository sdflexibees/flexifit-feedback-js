import { useEffect, useState } from "react";
import type { FSchema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<FSchema>();

function App() {
  const [todos, setFlexiFitFeedbacks] = useState<Array<FSchema["FlexifitFeedback"]["type"][]>>([]);

  useEffect(() => {
    client.models.FlexifitFeedback.observeQuery().subscribe({
      next: (data: { items: any; }) => setFlexiFitFeedbacks([...data.items]),
    });
  }, []);

  function createFlexiFitFeedback() {
    client.models.FlexifitFeedback.create({ comment: window.prompt("FlexiFitFeedback content") });
  }

  return (
    <main>
      <h1>My Feedback</h1>
      <button onClick={createFlexiFitFeedback}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li >{todos.length} number of Items </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
