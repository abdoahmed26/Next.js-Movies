"use client"

import { signIn } from "next-auth/react";
import Image from "next/image";

const Google = () => {
    return (
        <button onClick={()=>signIn("google",{redirect:true,callbackUrl:"/"})} className="bg-blue-500 px-3 flex items-center gap-2 h-8 w-full text-center text-white rounded">
            <Image src="/google-icon.png" alt="icon" className="rounded-full" width={20} height={20}/>
            Google
        </button>
    );
}

export default Google;
