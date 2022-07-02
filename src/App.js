import React from 'react'
import Count from './pages/Count'
import Home from './pages/home/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/about/About';
import Shop from './pages/shop';
import Product from './pages/shop/Product';
import NavBar from './components/nav/NavBar';
import NotFound from './pages/NotFound/NotFound';
import Todo from './pages/todo/Todo';
import Registeration from './pages/registeration/Registeration';
function App() {
  
  return (
    <BrowserRouter>

    <NavBar/>

      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path='/counter' element={<Count />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path="/register" element={<Registeration></Registeration>}/>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App