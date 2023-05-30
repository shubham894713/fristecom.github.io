import React from 'react'

function NotFound() {
  return (
    <div className='notFound'>
        <div>
            <h1>404 Not Found</h1>
            <h3>Please go back to home page</h3>
            <button><a href='/'>Home</a></button>
        </div>
    </div>
  )
}

export default NotFound
