import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

const SearchItem = () => {
  
  const {term}=useParams();
  const [filterdata, setfilterdata] = useState([])
  
  useEffect(() => {
    const filtereddata=()=>{
       const data=items.filter((p)=>p.title.toLowerCase().includes(term.toLowerCase()));
       console.log(data);
       setfilterdata(data)
    }
    filtereddata();
  }, [term])
  
  return (
    <Product items={filterdata}/>
  )
}

export default SearchItem
