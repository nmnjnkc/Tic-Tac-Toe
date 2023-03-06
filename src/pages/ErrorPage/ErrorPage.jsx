import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css"


const ErrorPage = () => {
  return (
    <div className='error'> 
        <h2>404 - Page not found</h2>
        <p>Sorry, the requested page does not exist.</p>
        <p>Here's a helpful link:</p>
            <Link to='/'>Home</Link>
    </div>
  )
}

export default ErrorPage