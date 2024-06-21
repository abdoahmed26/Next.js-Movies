/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Image from "next/image";
import { ModeToggle } from "../ModeToggle";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserLogin } from "@/Functions/getUser";
import GetUserName from "./GetUserName";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getUserauth } from "@/Functions/gitUserAuth";
import GeneralData from "./GeneralData";

const Header = () => {
    const dispatch = useDispatch()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const router = useRouter()
    const onSubmit = (data:any) => {
        // console.log(data)
        router.push(`/Home/search/${data.search}`)
    }
    const user = useSession()
    // console.log(user)
    const [check,setCheck] = useState(true)
    if(user.status==="authenticated" && check){
        getUserauth(user.data.user,dispatch)
        console.log("true")
        setCheck(false)
    }
    const [isClient, setIsClient] = useState(false)
    useEffect(()=>{
        setIsClient(true)
        getUserLogin(dispatch)
    },[])
    return (
        <div className="py-4 fixed top-0 w-full z-50 bg-gray-300 dark:bg-[#12121280]">
            <div className="container">
                <div className="flex justify-center sm:flex-row gap-3 items-center sm:justify-between">
                    <Image src="/logo-dark.webp" onClick={()=>router.push("/")} alt="logo" width={150} height={150} className="hidden sm:block"/>
                    <div className="flex gap-3">
                        <GeneralData/>
                        <form onSubmit={handleSubmit(onSubmit)} action="" className="h-[2.3rem]">
                            <input type="search" {...register("search")} placeholder="Search..." className="dark:bg-[#020617] px-2 w-full h-full rounded border border-black dark:border-white outline-none"/>
                        </form>
                        <ModeToggle/>
                        {
                            isClient ? <GetUserName/> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
