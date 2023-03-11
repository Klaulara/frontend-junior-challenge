import axios from "axios";
import { setTodoList } from "features/todo";

export const getTodoList = () => (dispatch) => {
    try {
        axios.get("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos").then((res)=>{
        dispatch(setTodoList(res.data));
    })
    } catch (error) {
        console.log(error)
    }
}