import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../pages/products/ProductsCart'
import AddProduct from './products/AddProduct';

const Home = () => {

  const products = useSelector((state) => state.products);

  return (
    <div className='py-8'>
      <div className='flex justify-around gap-4'>
        {/* Display Products */}
        <div className='col-span-2 items-center'>
          <div className='grid lg:grid-cols-2 gap-4'>
            {
              products.length ? products.map((product, index) => (
                <ProductCard key={index} product={product} />
              )) : <p>No Product Found</p>
            }
          </div>
        </div>

        {/* Add New Products */}
        <div>
          <AddProduct/>
        </div>

      </div>
    </div>
  )
}

export default Home