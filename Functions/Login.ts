import { getUser } from "@/actions/users"
import { addUserSlice } from "@/lib/userSlice"
import Cookie from "cookie-universal"
import { fireToast } from "./alert"

export const login = async(router:any,dispatch:any,setLoading:any,data:{email:string, password:string})=>{
    setLoading(true)
    // console.log(data)
    const users = await getUser()
    const user = users.find((items:any)=>items.email===data.email && items.password===data.password)
    if(user){
        const cookie = Cookie()
        cookie.set("UserToken",user.id)
        dispatch(addUserSlice({...user}))
        fireToast("You logged in Successfully!","success")
        router.push("/")
        setLoading(false)
    }
    else{
        fireToast("email or password incorrect!","error")
        setLoading(false)
    }
}