"use client"

import Image from "next/image";
import { useRouter } from 'next/navigation';

const ViemCom = ({item}:{item:any}) => {
    const router = useRouter()
    const goToDetails = () => {
        router.push(`/Home/details/${item.id}`)
    }
    return (
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-8">
            <div onClick={()=>goToDetails()} className="h-[230px] max-w-[400px] cursor-pointer hover:scale-105 duration-300">
                <div className="h-full w-[300px] sm:w-[400px] relative">
                    <Image src={`http://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`} alt={item.title} width={500} height={300} className="h-full w-full"/>
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10 h-full w-full">
                        <div className="flex px-3 items-end h-full">
                            <div>
                                <h1 className="text-md mb-3 text-white">{item.title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[700px]">
                <h1 className="text-md font-bold border-b dark:border-b-white mb-3 ">
                    {item.title} ({item.release_date.split("-")[0]})
                </h1>
                <p>{item.overview}</p>
            </div>
        </div>
    );
}

export default ViemCom;
