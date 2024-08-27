import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {


  const {user,isError,message,isLoading}= useSelector(state=>state.auth);
  const navigate = useNavigate();
  const dispatch =useDispatch();
  


  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const  handleSubmit = (e)=>{

        e.preventDefault();
        dispatch(loginUser({
          email,password,
        }));
       
  }


  useEffect(()=>{
   if(user){
    navigate('/');

   }
   if(isError || message){
    toast.error(message);

  }
     
  },[user,message,isError]);



  if(isLoading){
     return(
      <h2 className='text-center my-3'>Loading...</h2>
     )

  }



  return (
    <>
     <div className="container p-5">
    <h1 className='text-center my-3'>LogIn</h1>

     
    <div className="card p-3">
      <form className='my-3' onSubmit={(e)=>handleSubmit(e)}>

           <input type="text"
           placeholder='Enter Your EmAIL'
           className='form-control my-2 rounded-0'
           required
           onChange={(e)=>setEmail(e.target.value)}
           value={email}

            />

              <input type="text"
           placeholder='Enter Your Password'
           className='form-control my-2 rounded-0'
           required
           onChange={(e)=>setPassword(e.target.value)}
           value={password}
            />  
           

              <button className='btn btn-secondary w-100 rounded-0'>Log-In</button>


      </form>

    </div>



 
    </div>




    </>  
)
}

export default Login