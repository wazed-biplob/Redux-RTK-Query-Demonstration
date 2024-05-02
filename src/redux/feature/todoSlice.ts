import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface TToDo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

interface TInitialState {
  todos: TToDo[];
}

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<TToDo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeToDo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, removeToDo, toggleComplete } = todoSlice.actions;
