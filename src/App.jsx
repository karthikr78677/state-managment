import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import NavBar from "./components/navbar.jsx"
import Product from "./components/product.jsx"
import RootLayout from './components/RootLayout.jsx';
import Cart from "./components/cart.jsx"

function App() {
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<NavBar/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ));

  return (
    <>
  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
