import { signIn } from "next-auth/react";
import Image from "next/image";

const GitHub = () => {
    return (
        <button onClick={()=>signIn("github",{redirect:true,callbackUrl:"/"})} className="bg-green-500 px-3 flex items-center gap-2 h-8 w-full text-center text-white rounded">
            <Image src="/github-icon.png" alt="icon" className="rounded-full" width={20} height={20}/>
            GitHub
        </button>
    );
}

export default GitHub;