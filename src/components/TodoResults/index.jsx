import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";


const TodoResults = () => {
  const count = useSelector((state)=> state.counter.value);

  return <div className="todo-results">Done: {count}</div>;
};

export default TodoResults;
