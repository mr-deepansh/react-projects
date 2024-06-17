// import React from 'react'
import { Link } from "react-router-dom"

function NotFound() {
 return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
                <p className="text-2xl font-medium text-gray-600 mt-4">Oops! Page Not Found</p>
                <p className="mt-4 text-gray-500">The page you are looking for does not exist or has been moved.</p>
                <Link to="/" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Go Home</Link>
            </div>
        </div>
    );
}

export default NotFound