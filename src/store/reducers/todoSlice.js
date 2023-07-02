import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, actions)=>{
            state.push(actions.payload.value)
        },
        deleteTodo: (state, actions)=>{
            state.filter((e)=>{return e.id !== actions.payload ? e : ''})
        }
    }
})