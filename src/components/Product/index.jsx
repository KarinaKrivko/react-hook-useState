import React from 'react';
import s from './style.module.css'


export default function Product({id, title, price, deleteProduct}) {
  return (
    <div className={[s.card, price > 20000 ? s.expensive : ''].join(' ')}>
       <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => deleteProduct(id)}>Удалить</button>
    </div>
  )
}

