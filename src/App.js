import './App.css';
import Register from './views/Register';
import Todo from './views/Todo';
import Counter from './views/Counter';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './views/Home';
import RootLayout from './views/layouts/RootLayout';
import Products from './views/Products';

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout />}>

      <Route path='/home' element={<Home />}/>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/todo' element={<Todo />}/>
      <Route path='/register' element={ <Register />}/>
      <Route path='/products' element={ <Products />}/>
      {/* <Route path='help' element={<HelpLayout />}>
        <Route path='contact' element
      </Route> */}
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Register /> */}
      
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
