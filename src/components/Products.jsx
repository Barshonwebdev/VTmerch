import React from 'react';
import './products.css'
const Products = () => {
    return (
        <div className='px-12 mx-3 mt-10 space-y-2 '>
            <p className='text-4xl font-semibold text-black bogo tracking-widest'>BUY 1 GET 1 FREE</p>
            <p className='text-4xl font-semibold  bogo tracking-widest  text-black'>ON <span className='best'>BEST SELLING PRODUCTS</span></p>
        </div>
    );
};

export default Products;