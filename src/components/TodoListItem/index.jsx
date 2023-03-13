import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "services/api";
import {decrement, increment} from '../../features/counter/index'

const TodoListItem = ({ element }) => {
  const [isChecked, setIsChecked] = useState(element.checked);
  const dispatch = useDispatch();

  const onCheck = (id, checked) => {
    if (checked === false) {
      checked = true;
      setIsChecked(true);
      dispatch(increment())
      dispatch(toggleTodo(id, checked));
    } else {
      checked = false;
      setIsChecked(false);
      dispatch(decrement())
      dispatch(toggleTodo(id, checked));
    }
  };

  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="flex items-center mb-4 col-start-1 col-end-6">
        <input
          id="default-checkbox"
          type="checkbox"
          value={element.checked}
          onChange={() => onCheck(element.id, element.checked)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
        />
        {isChecked ? (
          <label className="line-through ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {element.label}
          </label>
        ) : (
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {element.label}
          </label>
        )}
      </div>
      <div className="col-end-7">
        <input
          onClick={() => onDelete(element.id)}
          className="bg-gray-300 px-2"
          type="button"
          value="x"
        />
      </div>
    </div>
  );
};

export default TodoListItem;
