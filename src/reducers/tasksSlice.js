import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tasks from "../data/tasks";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: tasks }), 1000)
    );
});
const tasksSlice = createSlice({
    name: "task",
    initialState: {
        entities: [],
        loading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.entities = action.payload.data;
            state.loading = false;
        });
    },
});
export default tasksSlice.reducer;