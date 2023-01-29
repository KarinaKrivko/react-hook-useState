import React from 'react';
import Product from "../Product";
import { useState } from "react";

function App() {

  const defaultProducts = [
    {id: 1, title: 'велосипед', price: 45000},
    {id: 2, title: 'ролики', price: 25000},
    {id: 3, title: 'самокат', price: 15000},
    {id: 4, title: 'скейт', price: 13000},
    {id: 5, title: 'лыжи', price: 27000},
    {id: 6, title: 'коньки', price: 15000},
  ];

  const [products, setProducts] = useState(defaultProducts);

  return (
    <div>
     {
       products.map((product) => <Product key={product.id} {...product}/>)
      
     }
    </div>
  );
}

export default App;
