import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
    </div>
  );
};

export default App;
