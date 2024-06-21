import { getUser } from "@/actions/users"
import { addUserSlice } from "@/lib/userSlice"
import Cookie from "cookie-universal"

export const getUserLogin = async(dispatch:any)=>{
    const cookie = Cookie()
    const token = cookie.get('UserToken')
    const users = await getUser()
    const user = users.find((items)=>items.id===token)
    if(user?.email){
        dispatch(addUserSlice({...user}))
    }
}