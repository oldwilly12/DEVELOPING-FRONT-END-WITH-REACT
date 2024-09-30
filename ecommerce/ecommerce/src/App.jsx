import { useState } from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap
import ProuctList from './Components/ProductsList';
function App() {

  return (
    <>
      <div className="title col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2 text-center container-fluid bg-success">
        <h1 className='bg-success text-light'>E-Commerce Application</h1>
      </div>
      <ProuctList />
      <div className='button'>
      <button class="btn btn-success mx-2" type="submit">Clear Cart</button>
      </div>
    </>  
  )
}

export default App
