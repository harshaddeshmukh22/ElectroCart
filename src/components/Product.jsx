import React from "react";
import { items } from "./Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify"; // Import Bounce transition
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const addtocart = (id, price, title, description, imgSrc) => {
    const obj = { id, price, title, description, imgSrc };
    setCart([...cart, obj]);
    console.log("cart elements=", cart);
    toast(' Added to Cart!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  };

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
      <div className="container my-5">
        <div className="row">
          {items.map((product, index) => (
            <div
              className="col-lg-4 col-md-6 my-3 text-center"
              key={product.id || index}
            >
              <div className="card" style={{ width: "18rem" }}>
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="Card image cap"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}.</p>
                  <button className="btn btn-primary mx-3">
                    {product.price}₹
                  </button>
                  <button
                    onClick={() =>addtocart(product.id,product.price,product.title,product.description,product.imgSrc)}
                      
                        
                  
                    className="btn btn-warning"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default  Product;