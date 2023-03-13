import { useEffect } from "react";
import { getTodoList } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";

const TodoList = () => {
  const { list } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, [dispatch]);

  return (
    <div className="max-w-lg container mx-auto mt-5">
      <p className="text-xl font-bold text-center">THINGS TO DO:</p>
      <hr></hr>
      <div className="max-w-sm container mx-auto mt-5">
        {list.map((element, index) => (
          <TodoListItem element={element} key={index} />
        ))}
      </div>
    </div>

  );
};

export default TodoList;
