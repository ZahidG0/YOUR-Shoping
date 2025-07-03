import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cartSlice';

const ProductsCart = ({ product }) => {

    const { id, name, category, price, image, date } = product || {};

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product))

    }
    return (
        <div className="card bg-base-100 text-white w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" 
                    className='w-full h-48 object-cover'/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-primary"> Add To Cart </button>
                </div>
            </div>
        </div>
    )
}

export default ProductsCart