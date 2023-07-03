import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import TodoReducer from './reducers/todoSlice'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
        todo: TodoReducer
    }
})
