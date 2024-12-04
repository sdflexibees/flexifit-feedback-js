import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setFlexiFitFeedbacks] = useState<Array<Schema["FlexiFitFeedback"]["type"]>>([]);

  useEffect(() => {
    client.models.FlexiFitFeedback.observeQuery().subscribe({
      next: (data) => setFlexiFitFeedbacks([...data.items]),
    });
  }, []);

  function createFlexiFitFeedback() {
    client.models.FlexiFitFeedback.create({ content: window.prompt("FlexiFitFeedback content") });
  }

  return (
    <main>
      <h1>My todos</h1>
      <button onClick={createFlexiFitFeedback}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
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
