import { addUserAuth, getUserAuth } from "@/actions/users"
import { addUserSlice } from "@/lib/userSlice"
import Cookie from "cookie-universal"

export const getUserauth = async(data:any,dispatch:any)=>{
    const users = await getUserAuth()
    const user = users.find((items:any)=>items.email===data.email && items.image===data.image)
    if(user){
        dispatch(addUserSlice({...user}))
        const cookie = Cookie()
        cookie.set("UserToken",user.id)
    }
    else {
        const newUser = await addUserAuth({...data})
        dispatch(addUserSlice({...newUser}))
        const cookie = Cookie()
        cookie.set("UserToken",newUser.id)
    }
}