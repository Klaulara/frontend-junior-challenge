import React from "react";

const TodoListItem = ({ e, onCheck, checked, onDelete }) => (
  <p>{e.label}</p>
  // <div className="todo-list-item">
  //   <div
  //     tabIndex="0"
  //     role="checkbox"
  //     aria-checked
  //     className="todo-list-item-content"
  //   >
  //     <input
  //       tabIndex="-1"
  //       type="checkbox"
  //       checked={checked}
  //       onChange={onCheck}
  //     />
  //     <p>
  //       <span className={checked ? "todo-list-item-checked" : ""}>{e.label}</span>
  //     </p>
      
  //   </div>
  //   <button type="button" className="todo-list-item-delete" onClick={onDelete}>
  //     x
  //   </button>
  // </div>
);

export default TodoListItem;
