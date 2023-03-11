import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: []
    },
    reducers: {
        setTodoList: (state, action) => {
            state.list = action.payload;
        }
    },
});

export const { setTodoList } = todoSlice.actions;

export default todoSlice.reducer;