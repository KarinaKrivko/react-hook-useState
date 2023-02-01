import React from 'react';


function AddProduct() {

    const onSubmit = event =>{
        event.prevetDefault();
        const {title, price} = event.target;
        console.log(title.value, price.value);
        title.value = '';
        price.value = '';
    }
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="title" placeholder="название"/>
            <input type="number" name="price" placeholder="цена"/>
            <button>Добавить</button>
        </form>
    );
}

export default AddProduct;