import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import TodoReducer from './reducers/todoSlice'
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import productsReducer from './reducers/productsSlice'

export const store = configureStore({ 
    reducer: {
        counter: counterReducer,
        todo: TodoReducer,
        products: productsReducer
    }, 
    middleware: [...getDefaultMiddleware(), logger, thunkMiddleware]
})
