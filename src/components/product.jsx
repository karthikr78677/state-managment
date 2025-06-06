import React from 'react'
import { useState,useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
 
import { useDispatch } from 'react-redux';
import {add} from "../store/cartSlice"

const Product = () => {
  const dispatch=useDispatch()
    const [products,getProduct]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data=>data.json())
        .then(result=>getProduct(result))
        .catch(err=>console.error("failed to fetch the data",err));
    },[])
   
   const addToCart=(product)=>{
    dispatch(add(product))
       }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
    {products.map(product => (
      <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} style={{ height: '250px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR {product.price}
          </Card.Text>
          <Button variant="primary" onClick={()=>{addToCart(product)}}>Add to Cart</Button>
        </Card.Body>
      </Card>
    ))}
  </div>
  )
}

export default Product