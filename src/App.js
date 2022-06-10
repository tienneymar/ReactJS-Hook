import logo from "./logo.svg";
import "./App.css";
import HomeComponent from "./view/Home";
import React, { useState, useEffect } from "react";
import Todo from "./view/Todo";
import Covid from "./view/Covid";
import Countdown from "./view/countdow";
import Blog from "./view/Blog";
import DetailBlog from "./view/Detailblog";
import AddNewBlog from "./view/AddNewBlog";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import NotFound from "./view/NotFound";

//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  let [name, setName] = useState("Tien"); //[a1, b1, c1....]
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching Channel", type: "eric" },
    { id: "todo2", title: "Doing homework", type: "eric" },
    { id: "todo3", title: "Playing game", type: "honit" },
    { id: "todo4", title: "Reading books", type: "honit" },
  ]);

  //didmount
  useEffect(() => {
    // console.log('run use effect')
  }, [address]);

  useEffect(() => {
    // console.log('run use effect todos')
  }, [todos]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("emtpy input");
      return;
    }
    //hook not merge state
    //...spread syntax array js
    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: address,
      type: "eric",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnchangeInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const onTimesup = () => {
    // alert('times up')
  };
  //re-render
  //for for-each => map
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <HomeComponent />
          <img src={logo} className="App-logo" alt="logo" />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <Countdown onTimesup={onTimesup} />
              <span>---------------------</span>
            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title={"All todos"}
                deleteDataTodo={deleteDataTodo}
              />
              <input
                type="text"
                value={address}
                onChange={(event) => handleOnchangeInput(event)}
              />
              <button
                type="button"
                onClick={(event) => handleEventClick(event)}
              >
                Them
              </button>
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/addnew">
              <AddNewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
