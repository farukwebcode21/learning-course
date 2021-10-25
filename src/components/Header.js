import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
         <div className=" bg-gray-100">
            <nav className="flex items-center justify-between p-6 h-14 bg-gray-900 shadow-sm, shadow-lg">
                <div className="py-5 px-3  to-blue-500 text-sm font-semibold text-white cursor-pointer hover:text-green-400">WEB-MASTER</div>
                <ul>
                <li className="space-x-5 text-sm uppercase">
                    <Link to="/home" className="hidden sm:inline-block text-white hover:text-green-400 ">Home</Link>
                    <Link to="/about" className="hidden sm:inline-block text-white hover:text-green-400">About</Link>
                    <Link to="/service" className="hidden sm:inline-block text-white hover:text-green-400">Servics</Link>
                    <Link to="/team" className="hidden sm:inline-block text-white hover:text-green-400">Team</Link>
                </li>
                <div className="sm:hidden space-y-1 hover:cursor-pointer">
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                    <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
                </div>
                </ul>
            </nav>
        </div>

    )
}

export default Header
