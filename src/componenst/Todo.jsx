const Todo = ({ todo, index, setTodos, todos }) => {
  const onClickDone = () => {
    const newTodos = todos.map((v, i) => {
      if (v.id == todo.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });
    setTodos(newTodos);
  };
  const onClickDelete = () => {
    const newTodos = todos.filter((v, i) => {
      if (v.id !== todo.id) {
        return v;
      }
    });
    setTodos(newTodos);
  };
  return (
    <li
      className={`bg-gray-100 w-96 p-4 rounded-md ${
        index % 2 ? "bg-purple-300" : "bg-pink-200"
      }`}
    >
      <span className=" w-1/6 inline-block font-black">{todo.id}</span>
      <button
        className={`w-2/4 inline-block font-black ${
          todo.isDone && "line-through"
        }`}
        onClick={onClickDone}
      >
        {todo.title}
      </button>
      <button
        className="w-4/12 pl-14 inlin-block text-center font-black hover:text-purple-900"
        onClick={onClickDelete}
      >
        Del
      </button>
    </li>
  );
};

export default Todo;
