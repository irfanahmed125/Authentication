import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutUser } from '../Features/auth/authSlice';

const Navbar = () => {

  const {user} = useSelector(state=>state.auth);
  const dispatch = useDispatch();

  const handleLogout = ()=>{

   dispatch(logOutUser())
  }

  return (
    <>
        <nav class="navbar bg-secondary text-light py-3">
    <div class="container-fluid">

        <Link  to={'/'} class="navbar-brand mb-0 h1 text-light mx-3">HOME/User-Authentication-app</Link>

        <span>
          {
            user ? (
              <button className='btn btn-danger btn-sm mx-2'
              onClick={handleLogout}>Log-Out</button>) : 
              (
              <>
              <Link to={'/register'} className='btn btn-light btn-sm mx-2'>Register</Link>
              <Link to={'/login'} className='btn btn-dark btn-sm mx-2'>Log-In</Link>
        
              </>
            )
          }


      </span>
        
    </div>  
    </nav>
        
    
    
    </>
  )
}

export default Navbar