import { useState } from "react";
import CreateTodo from "./componenst/CreateTodo";
import Todo from "./componenst/Todo";

const App = () => {
  const [todoId, setTodoId] = useState(2);
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "코딩하기🔥",
      isDone: false,
    },
  ]);
  return (
    <main className="pt-10 bg-purple-200 min-h-screen flex flex-col justify-start items-center">
      <CreateTodo
        todoId={todoId}
        setTodoId={setTodoId}
        todos={todos}
        setTodos={setTodos}
      />
      <ul className="mt-8">
        {todos.map((v, i) => (
          <Todo key={i} todo={v} index={i} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </main>
  );
};

export default App;
