import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]= useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAddToCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='shope-container flex justify-between pr-32 pl-6 mt-5'>
            <div className='products-container grid grid-cols-3 gap-3'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-cotainer'>
                <h4>Order summary</h4>
                <p>Select Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;