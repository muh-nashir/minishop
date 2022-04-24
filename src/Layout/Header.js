import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-green-700 text-white">
            <div className="container py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold"><Link to="/">MiniShop</Link></h2></div>
                    <div>
                        <ul className="flex space-x-7 ">
                            <li><Link to="/products" className="hover:font-semibold">Products</Link></li>
                            <li><Link to="/shopping-cart" className="hover:font-semibold">Cart</Link></li>
                            <li><Link to="/order-history" className="hover:font-semibold">Order History</Link></li>
                            <li><Link to="/login" className="hover:font-semibold">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
