import React from 'react';
import Product from "../Product";
import { useState } from "react";
import AddProduct from '../AddProduct';
// import { useEffect } from  "react";

function App() {

  const defaultProducts = [
    {id: 1, title: 'велосипед', price: 45000},
    {id: 2, title: 'ролики', price: 25000},
    {id: 3, title: 'самокат', price: 15000},
    {id: 4, title: 'скейт', price: 13000},
    {id: 5, title: 'лыжи', price: 27000},
    {id: 6, title: 'коньки', price: 15000},
  ]

  const [products, setProducts] = useState(defaultProducts);

  const deleteProduct = (delId) => {
    const newArr = products.filter(({id}) => id !== delId);
    setProducts(newArr);
  };

  const createProduct = (title, price) => {
    const newProduct = {
      id: Date.now(),
      title,
      price
    }
    const newArr = [...products, newProduct];
    setProducts(newArr);
  }

  return (
    <div>
      <AddProduct createProduct={createProduct}/>
      <div>
     {
       products.map((product) =>
        <Product key={product.id} 
        {...product}
       deleteProduct={deleteProduct}
       />)
     }
     </div>
    </div>
  );
}



export default App;

  {/* // useEffect(() => {
  //   const request = async () => {
  //     const resp = await fetch('https://fakestoreapi.com/products');
  //     const data = await resp.json();
  //     const newArr = data.map(({id, title, price}) => ({id, title, price}));
  //     setProducts(newArr);
  //   }
  //   request();
  // }, []); */}

