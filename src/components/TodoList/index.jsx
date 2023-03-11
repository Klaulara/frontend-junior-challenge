import { useEffect } from "react";
import "./styles.css";
import { getTodoList } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";

const TodoList = () => {
  const { list } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {list.map((e, index) => (
          <TodoListItem e={e} />
        ))}
      </div>
      {/* <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div> */}
    </div>
  );
};

export default TodoList;
