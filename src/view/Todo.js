import React from "react";

const Todo = (props) => {
  // const todos = props.myData;
  const { todos, title, deleteDataTodo } = props;
  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <>
      <div className="todo-container">
        <div className="title">{title}</div>
        {todos.map((todo) => {
          return (
            <>
              <li className="todo-child" key={todo.id}>
                {todo.title}
                <span onClick={() => handleDelete(todo.id)}>x</span>
              </li>
            </>
          );
        })}
        <hr></hr>
      </div>
    </>
  );
};
export default Todo;
