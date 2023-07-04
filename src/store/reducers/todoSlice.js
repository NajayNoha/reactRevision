
import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    id: 1, 
    text: "fjskfksjhdlhpmd",
    completed: true
}]

const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, actions)=>{
            state.push(actions.payload)
        },
        deleteTodo: (state, actions)=>{
            return state.filter((e)=>{return e.id != actions.payload})
        },
        toggleTodo: (state, actions)=>{
            return state.map((e)=>{
                if(e.id == actions.payload){
                    return {...e, completed: !e.completed} 
                }
                return e;
            })
        }
    }
})


export const {addTodo, deleteTodo, toggleTodo} = todoSlice.actions;
export default todoSlice.reducer