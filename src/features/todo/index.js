import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        setTodoList: (state, action) => {
            state.list = action.payload;
        },
        setNewTodo: (state, action) => {
            state.list = action.payload;
        },
        setToggleTodo: (state, action) => {
            state.list = action.payload;
        },
        setDeleteTodo: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { setTodoList, setNewTodo, setToggleTodo, setDeleteTodo } = todoSlice.actions;

export default todoSlice.reducer;