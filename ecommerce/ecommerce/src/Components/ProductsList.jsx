import React from "react";
import "../Components/ProductsList.css";
const ProuctList = () => {
    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    return (
       <>
       <div className="principal">
        <div className="h2">
            <h2>Products</h2>
        </div>
        <div className="row">
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
             <div className="bu">
                <button>hola</button>
             </div>
        </div>
       </div>
       </>
    )
}

export default ProuctList;