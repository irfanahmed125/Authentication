import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const {user,isLoading} = useSelector(state=>state.auth);
  const navigate = useNavigate();


  useEffect(()=>{

    if(!user || user.length===0){

      navigate('/login');

    }

  },[user]);

  if(isLoading){
    return(
      <h2 className='text-center my-3'>Loading...</h2>
    )

  }

  

  return (
    <>
    <div className="container p-5">
    <h1 className='text-center my-3'>Home-Page</h1>


    </div>
    
    
    </>
  )
}

export default Home