"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import Google from "../Buttons/Google";
import GitHub from "../Buttons/GitHub";
import { login } from "@/Functions/Login";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogForm = () => {
    const {register,handleSubmit,formState: { errors }} = useForm()
    const dispatch = useDispatch()
    const router = useRouter()
    const [loading,setLoading] = useState(false)
    const onSubmit = (data:any) => {
        // console.log(data)
        login(router,dispatch,setLoading,data)
    }
    return (
        <div className="p-10 w-[350px] back2">
            <h1 className="text-xl text-white">Sign In</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="py-4 border-b border-b-white">
                <div>
                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="w-full bg-transparent placeholder:text-white h-8 p-2 outline-none border border-white rounded" />
                    {
                        errors.email?.type==="required" && <span className="text-red-500 inline-block animate-bounce">Email is required</span>
                    }
                </div>
                <div className="my-4">
                    <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="w-full bg-transparent placeholder:text-white h-8 p-2 outline-none border border-white rounded" />
                    {
                        errors.password?.type==="required" && <span className="text-red-500 inline-block animate-bounce">Password is required</span>
                    }
                </div>
                <button className="bg-red-500 h-8 w-full text-center text-white rounded" disabled={loading}>
                    {
                        loading ? <span className="inline-block animate-spin w-5 h-5 rounded-full border border-gray-500 border-l-white"></span>
                        : "Sign In"
                    }
                </button>
            </form>
            <div className="my-3 flex gap-3">
                <Google/>
                <GitHub/>
            </div>
            <div>
                <span className="text-gray-400">New to streamtub? </span> 
                <Link href={"/SignUp"} className="underline text-white">Sign up now</Link>
            </div>
        </div>
    );
}

export default LogForm;
