"use client"

import { RootState } from "@/lib/store";
import { ArrowRightFromLine } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from "cookie-universal"
import { deleteUser } from "@/lib/userSlice";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const drowMenu = (user:any,dispatch:any,router:any)=>{
    const SignOut = ()=>{
        const cookie = Cookie()
        cookie.remove('UserToken')
        dispatch(deleteUser())
        router.push('/')
        signOut()
    }
    const color = ["blue", "green", "red"]
    const bg = color[Math.trunc(Math.random()*color.length)]
    // console.log(bg)
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="flex flex-col items-center w-[2rem]">
                    {
                        user?.image ? <div className="rounded-full w-[2rem] h-[2rem] block"><Image src={`${user.image}`} alt={user.name} width={25} height={25} className="rounded-full w-[2rem] h-[2rem] block"/></div> 
                        : <div className={`flex items-center justify-center px-[10px] py-[2px] h-fit bg-${bg}-500 rounded-full text-lg capitalize`}>
                            <span>
                                {user?.name[0]}
                            </span>
                        </div>
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-[#020617]">
                <DropdownMenuLabel onClick={()=>router.push("/")} className="cursor-pointer">
                    {user.name}
                </DropdownMenuLabel>
                <hr />
                <DropdownMenuCheckboxItem onClick={()=>SignOut()} className="px-2 cursor-pointer">
                    Logout
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const GetUserName = () => {
    const user:any = useSelector((state:RootState)=>state.user)
    // console.log(user)
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <>
            {
                user.email ? 
                <div>
                    {drowMenu(user,dispatch,router)}
                </div>
                : <button onClick={()=>router.push("/Login")} className="px-1 gap-[2px] h-[2.3rem] border border-black bg-white dark:border-white rounded flex items-center text-sm dark:bg-[#020617]">
                    <ArrowRightFromLine size={20}/> Log
                </button>
            }
        </>
    );
}

export default GetUserName;
