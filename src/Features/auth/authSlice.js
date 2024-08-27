import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExits = JSON.parse(localStorage.getItem('user'));
const authSlice = createSlice({
    name : "auth",
    
    initialState : {

        user : userExits ? userExits : null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : "",

    },
    reducers : {

    },

    extraReducers : (builder)=>{
        builder.addCase(userRegister.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
            state.message=""

        }).addCase(userRegister.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.message=""
            state.user=action.payload
            


        }).addCase(userRegister.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload


        }).addCase(loginUser.pending,(state,action)=>{
            state.isLoading=true
            state.isError=false
            state.isSuccess=false
            state.message=""

        }).addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=true
            state.message=""
            state.user=action.payload
            


        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.isSuccess=false
            state.message=action.payload


        }).addCase(logOutUser.fulfilled,(state,action)=>{
       
            state.isSuccess = false;
            state.user = null;
              

        });


    }
    
});
export default authSlice.reducer;


export const userRegister = createAsyncThunk("REGISTER/USER",async(formData,thunkAPI)=>{

    try {
        
        return await authService.register(formData);
        
    } catch (error) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
        
        
    }     



});


//login-Thunk
export const loginUser = createAsyncThunk("LOGIN/USER",async(formData,thunkAPI)=>{

    try {

        return await authService.login(formData);
        
    } catch (error) {
      
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
 
    }     


});


export const logOutUser = createAsyncThunk("LOGOUT/USER",async()=>{

    localStorage.removeItem('user');


});
