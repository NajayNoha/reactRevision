import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './../store/reducers/todoSlice'

const Todo = () =>{
    const todos = useSelector(state=>state.todo);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState('')
    console.log(todos);
    const add = () =>{
        const newtodo = {
            id: todos.length + 1,
            text: todo,
            completed: false
        }
        dispatch(addTodo(newtodo));
        setTodo('');
    }
    return (
        <div>
            <div className="create">
                <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                <button onClick={()=>add()}>+</button>
            </div> 
            <ol>
                { todos.map(e=>
                    <li key={e.id}><input type="checkbox" />  { e.text} <button onClick={()=>dispatch(deleteTodo(e.id))}>delete</button></li>
                ) }
            </ol>   
        </div>
    )
};


export default Todo;