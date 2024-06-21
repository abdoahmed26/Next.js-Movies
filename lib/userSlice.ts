import { createSlice } from "@reduxjs/toolkit";

const userSlice:any = createSlice({
    name:"userSlice",
    initialState:{},
    reducers:{
        addUserSlice:(state,action)=>{
            state=action.payload
            return state;
        },
        deleteUser:()=>{
            return {};
        }
    }
})

export const {addUserSlice,deleteUser} = userSlice.actions;

export default userSlice.reducer;