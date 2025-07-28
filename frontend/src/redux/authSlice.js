import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        //actionsc
        setloading:(state, action) =>{
            state.loading = action.payload;
        },
        setUser:(state, action)=>{
            state.user = action.payload;
        }
    }
})

export const {setloading,setUser} = authSlice.actions;
export default authSlice.reducer;