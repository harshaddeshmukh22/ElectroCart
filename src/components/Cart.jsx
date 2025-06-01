import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container my-5" style={{ width: "54%" }}>

        {
         cart.length==0 ?(
<>
  <div className="text-center">
    <h1>Your cart is empty</h1>
    <Link to={"/"}className='btn btn-warning'>Continue shopping</Link>
  </div>
</>
         ):
        cart.map((product) => {
          return (
            <div className="card mb-3" style={{ width: "700px" }} key={product.id}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={product.imgSrc} className="card-img" alt={product.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <button className="btn btn-warning">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};


export default Cart
