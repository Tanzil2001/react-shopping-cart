import React from 'react';

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart= props.handleAddToCart;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body bg-sky-400 text-black">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Manufecture: {seller}</p>
                    <p>Ratings: {ratings}</p>
                    <button onClick={()=>handleAddToCart(props.product)} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Product;