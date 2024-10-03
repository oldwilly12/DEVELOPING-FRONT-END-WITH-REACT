import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import ProuctList from './Components/ProductsList';
import ShoppingCart from './Components/ShoppingCart';
function App() {

  return (
    <>
      <div className="title col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 text-center container-fluid bg-success">
        <h1 className='bg-success text-light'>E-Commerce Application</h1>
      </div>
      <div>
      <ProuctList />
      <ShoppingCart />
      </div>
    </>  
  )
}

export default App
