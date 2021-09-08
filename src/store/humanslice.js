import { createSlice, nanoid } from "@reduxjs/toolkit";
import { taskSlice } from "./taskslice";


const AddHuman = (name) => ({
 id: nanoid(),
 name,
 taskIds: []


})

const initialState = [
 AddHuman('Steve'),
 AddHuman('Mars'),
 AddHuman('Tars'),
 AddHuman('Ayesha')
]

export const humanSlice = createSlice({
 name: 'humans',
 initialState,
 reducers:
 {
  add: (state, action) => {
   state.push(AddHuman(action.payload))
  }
 },
 extraReducers: (builder) => {

  builder.addCase(taskSlice.actions.assignTouser, (state, action) => {
   for (const human of state) {
    if (human.id === action.payload.humanId) {
     human.taskIds.push(action.payload.taskId);
    }
    else {
     human.taskIds = human.taskIds.filter(id => id !== action.payload.taskId)
    }
   }
  })
 }
})