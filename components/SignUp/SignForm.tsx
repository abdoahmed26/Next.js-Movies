"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import Google from "../Buttons/Google";
import GitHub from "../Buttons/GitHub";
import { signUp } from "@/Functions/SignUp";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignForm = () => {
    const router = useRouter()
    const {register,handleSubmit,formState: { errors }} = useForm()
    const [loading,setLoading] = useState(false)
    const onSubmit = (data:any) => {
        // console.log(data)
        signUp(router,setLoading,data)
    }
    return (
        <div className="p-10 w-[350px] back2">
            <h1 className="text-xl text-white">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="py-4 border-b border-b-white">
                <div>
                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Username" className="w-full bg-transparent placeholder:text-white h-8 p-2 outline-none border border-white rounded" />
                    {
                        errors.name?.type==="required" && <span className="text-red-500 inline-block animate-bounce">Username is required</span>
                    }
                </div>
                <div className="mt-4">
                    <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="w-full bg-transparent placeholder:text-white h-8 p-2 outline-none border border-white rounded" />
                    {
                        errors.email?.type==="required" && <span className="text-red-500 inline-block animate-bounce">Email is required</span>
                    }
                </div>
                <div className="my-4">
                    <input type="password" {...register("password", { required: true,minLength:6,maxLength:20 })} name="password" placeholder="password" className="w-full bg-transparent placeholder:text-white h-8 p-2 outline-none border border-white rounded" />
                    {
                        errors.password?.type==="required" && <span className="text-red-500 inline-block animate-bounce">Password is required</span>
                    }
                    {
                        errors.password?.type==="minLength" && <span className="text-red-500 inline-block animate-bounce">The password must be more than 6 characters</span>
                    }
                    {
                        errors.password?.type==="maxLength" && <span className="text-red-500 inline-block animate-bounce">The password must be less than 20 characters</span>
                    }
                </div>
                <button className="bg-red-500 h-8 w-full text-center text-white rounded" disabled={loading}>
                    {
                        loading ? <span className="inline-block animate-spin w-5 h-5 rounded-full border border-gray-500 border-l-white"></span>
                        : "Sign Up"
                    }
                </button>
            </form>
            <div className="my-3 flex gap-3">
                <Google/>
                <GitHub/>
            </div>
            <div>
                <span className="text-gray-400">Have an account? </span> 
                <Link href={"/Login"} className="underline text-white">Sign in now</Link>
            </div>
        </div>
    );
}

export default SignForm;
