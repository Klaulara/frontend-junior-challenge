import axios from "axios";
import { setTodoList, setNewTodo, setToggleTodo, setDeleteTodo } from "features/todo";

const TODO_URL = "https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos"

export const getTodoList = () => (dispatch) => { 
  try {
    axios
      .get(TODO_URL)
      .then((res) => {
        dispatch(setTodoList(res.data));
      });
  } catch (error) {
    console.log(error);
  }
};

export const newTodo =
  ( data ) =>
  (dispatch) => {
    try {
      axios
        .post(TODO_URL, data)
        .then((res) => {
          dispatch(setNewTodo(res.data));
        });
    } catch (error) {
      console.log(error);
    }
  };

export const toggleTodo =
  ( id, checked ) =>
  (dispatch) => {
    try {
      axios
        .patch(TODO_URL + `/${id}`, {checked})
        .then((res) => {
          dispatch(setToggleTodo(res.data));
        });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTodo =
  ( id ) =>
  (dispatch) => {
    try {
      axios
        .delete(TODO_URL + `/${id}`)
        .then((res) => {
          dispatch(setDeleteTodo(res.data));
        });
    } catch (error) {
      console.log(error);
    }
  };
