"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

const CreditsCom = ({item}:{item:any}) => {
    const router = useRouter()
    return (
        <div onClick={()=>router.push(`/Home/details/${item.id}`)} className="flex h-[300px] w-full justify-center cursor-pointer hover:scale-105 duration-300">
            <div className="h-full w-full relative">
                {
                    item.poster_path === null ? 
                    <p className="flex h-full justify-center items-center">
                        <span>No Image!</span>
                    </p>
                    :<Image src={`http://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`} alt={item.title} width={500} height={300} className="h-full w-full"/>
                }
                <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10 h-full w-full">
                    <div className="flex px-3 items-end h-full">
                        <div>
                            <h1 className="text-md mb-3 text-white">{item.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditsCom;
