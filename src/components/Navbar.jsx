import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Navbar = () => {

    const carts = useSelector((state) => state.carts);
    const cartItems = carts.reduce ((total, product) => total + product.quantity, 0)
    return (
        <div className='bg-indigo-500'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost hover:text-yellow-500 hover:underline text-xl">YOUR-Shoping</Link>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <div className='space-x-5 text-xl'>
                        <Link to='/' >Home</Link>
                        <Link to='/products'>Products</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                                <span className="badge badge-sm indicator-item">{cartItems}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{carts.length ? carts.length : 0} Items</span>
                                <div className="card-actions">
                                    <Link to='/cart'>
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar