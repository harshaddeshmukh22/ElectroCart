import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
const Detail = () => {
    const { id } = useParams()
    const [product, setproduct] = useState({})
    const [relatedproducts, setrelatedproducts] = useState([])
    useEffect(() => {
      const filterProduct=items.filter((product)=>product.id==id)
      //console.log(filterProduct)
      setproduct(filterProduct[0])
      const relatedproducts=items.filter((p)=>p.category===product.category)
     // console.log(relatedProducts)
      setrelatedproducts(relatedproducts)

    }, [id,product.category]);
    
    
  return (
    <>
    <div className="container con">
        <div className="img">
            <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
        <h1 className="card-title">{product.title}</h1>
                    <p className="card-text">{product.description}.</p>
                    <button className="btn btn-primary mx-3">
                      {product.price}₹
                    </button>
                    <button className="btn btn-warning">Add To Cart</button>
        </div>

    </div>
    <h1 className='text-center'>Related Products</h1>
    <Product items={relatedproducts}/>
    </>
  )
}

export default Detail
