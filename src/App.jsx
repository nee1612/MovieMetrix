import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemContextProvider from './Context/ItemContextProvider';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ItemDetail from './components/ItemDetail';
import Loader from './components/Loader';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <BrowserRouter>
       <ItemContextProvider>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
             
             <Route path='/detail/:id' element={<ItemDetail/>}/>
              <Route path='/load' element={<Loader/>}/>
             <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer/>
        </ItemContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
