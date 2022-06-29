import React from 'react'
import Count from './pages/Count'
import Home from './pages/home/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import About from './pages/about/About';
import Shop from './pages/shop';
import Product from './pages/shop/Product';
import NavBar from './components/nav/NavBar';
import NotFound from './pages/NotFound/NotFound';
function App() {
  let count=0; 
  return (
    <BrowserRouter>

    <NavBar/>

      <Routes>
        <Route path='/counter' element={<Count counter={count}/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App