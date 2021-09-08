import { createAction, createSlice, nanoid } from "@reduxjs/toolkit"

const createTask = (title) => ({
 id: nanoid(),
 title,
 completed: false,
 assignedTo: ''


})
const initialState = [
 createTask("Order more energy drink."),
 createTask("Water the plans.")
];




export const taskSlice = createSlice({
 name: 'task',
 initialState,
 reducers: {
  add: (state, action) => {
   state.push(createTask(action.payload))
  },
  toggle: (state, action) => {
   const task = state.find((task) => task.id === action.payload.taskId);
   task.completed = action.payload.completed;
  },
  assignTouser: (state, action) => {
   const task = state.find((task) => task.id === action.payload.taskId);
   task.assignedTo = action.payload.humandId;
  }
 }
})
export const toggleTask = createAction('task/toggle', (taskId, completed) => ({
 payload: { taskId, completed }
}))
  // export const assignedUser = createAction('task/assignedTouser', (taskId, humandId) => ({
  //  payload: { taskId, humandId }
  // }))