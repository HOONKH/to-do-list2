import { useState } from "react";

const CreateTodo = ({ todoId, setTodoId, todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const onSubmitNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    setTodos([...todos, { id: todoId, title: newTodo, isDone: false }]);
    setTodoId(todoId + 1);
    setNewTodo("");
  };
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <form onSubmit={onSubmitNewTodo}>
      <input
        className="focus:border-purple-600 px-4 py-2 border-2 rounded-md focus:outline-none border-violet-400"
        type="text"
        value={newTodo}
        onChange={onChangeNewTodo}
      />

      <input
        className="px-4 py-2 border-2 rounded-md bg-purple-400 font-black ml-3 border-pink-200"
        type="submit"
        value="추 가"
      />
    </form>
  );
};

export default CreateTodo;
