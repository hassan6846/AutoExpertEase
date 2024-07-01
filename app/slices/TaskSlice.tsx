import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "task",
  initialState: {
    taskid: "",
    expertavatar: "",
  },
  reducers: {
    settaskId: (state, action) => {
      state.taskid = action.payload;
    },
  },
});

export const { settaskId } = TaskSlice.actions;
export default TaskSlice.reducer;
