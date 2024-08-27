import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userRegister } from '../Features/auth/authSlice';

const Register = () => {

  const {user,message,isError,isLoading} = useSelector(state=>state.auth);

  const navigate= useNavigate();
  const dispatch = useDispatch();

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [password2,setPassword2]=useState("");
   

  const handleSubmit = (e)=>{
    
    e.preventDefault();

    dispatch(userRegister({
      name,
      email,
      password,
      password2,

    }));
    if(password !==password2){
      alert("Incorrect password !")
    }
   

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
    <h1 className='text-center my-3'>Register</h1>

    <div className="card p-3">
      <form className='my-3'  onSubmit={(e)=>handleSubmit(e)}>

           <input type="text"
           placeholder='Enter Your Name'
           className='form-control rounded-0 my-2'
           required
           onChange={(e)=>setName(e.target.value)}
           value={name}
            />

              <input type="text"
           placeholder='Enter Your Email'
           className='form-control rounded-0 my-2'
           required
           onChange={(e)=>setEmail(e.target.value)}
           value={email}
            />  
            <input type="text"
            placeholder='Enter Your Password'
            className='form-control rounded-0 my-2'
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
             /> 

              <input type="text"
             placeholder='Enter Your Confirm-Password'
             className='form-control rounded-0 my-2'
             required
             onChange={(e)=>setPassword2(e.target.value)}
             value={password2}
              />

              <button className='btn btn-secondary w-100 rounded-0' type='submit'>Register</button>


      </form>

    </div>


    </div>
    
    
    </>
  )
}

export default Register