// ExpensePlanner/src/components/ItemSelection.jsx
import React from "react";
import "./ItemSelection.css"

const ItemSelection = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}> 
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Capacity: {item.capacity}
                </h6>
                <p className="card-text">Price: ${item.price}</p>
                <div className="buttons">
                    <div className="d-flex gap-2 d-md-flex justify-content-end align-items-center flex-row flex-nowrap">
                        <button className="btn btn-outline-danger me-2" type="button">
                        -
                        </button>
                        <p className="m-0">0</p> {/* Aquí se mostrará la cantidad */}
                        <button className="btn btn-outline-success ms-2" type="button">
                        +
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;
