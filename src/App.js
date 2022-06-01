import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./view/Home";
import React, { useState, useEffect } from "react";
import Todo from "./view/Todo";
import Covid from "./view/Covid";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  let [name] = useState("MinhTien");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "I have Lunch", type: "tien" },
    { id: "todo2", title: "Go to bed", type: "tien" },
    { id: "todo3", title: "Listen and Music", type: "Ronaldo" },
    { id: "todo4", title: "Reading Book", type: "Ronaldo" },
  ]);

  // useEffect(() => {
  //   console.log("run effect");
  // }, [todos]);
  // useEffect(() => {
  //   console.log("run effect");
  // }, [address]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty code");
      return;
    }
    //hook
    let newTodo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: address,
      type: "tien",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <HomeComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data Covid 19 VietNam By {name}</p>
        <Covid />
        <hr />

        <Todo todos={todos} title="All Todos" deleteDataTodo={deleteDataTodo} />
        <Todo
          todos={todos.filter((item) => item.type === "tien")}
          title="All Todos Neymar"
        />
        <br />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnchangeInput(event)}
        />
        <br />
        <button
          onClick={(event) => {
            handleEventClick(event);
          }}
          type="button"
        >
          Thêm Mới
        </button>
        {/* <Switch>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch> */}
      </header>
    </div>
  );
};

export default App;
