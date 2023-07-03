
import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: 1, 
    text: "fjskfksjhdlhpmd",
    completed: false
}]

const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, actions)=>{
            state.push(actions.payload)
        },
        deleteTodo: (state, actions)=>{
            state.filter((e)=>{return e.id!=actions.payload})
        },
        toggleTodo: (state, actions)=>{
            state.map((e)=>{
                if(e.id === actions.payload){
                    e.completed = !e.completed 
                }
                return e;
            })
        }
    }
})


export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer