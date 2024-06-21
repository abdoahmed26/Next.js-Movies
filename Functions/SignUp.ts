import { addUser, getUser } from "@/actions/users"
import { fireToast } from "./alert"

export const signUp = async(router:any,setLoading:any,data:{name:string,email:string, password:string})=>{
    // console.log(data)
    setLoading(true)
    const users = await getUser()
    const user = users.find((items)=> items.email===data.email)
    if(user){
        fireToast("This Email is already used!","error")
        setLoading(false)
    }
    else{
        await addUser(data)
        fireToast("Your Account create Successfully!","success")
        setLoading(false)
        router.push("/Login")
    }
}