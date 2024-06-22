"use client"

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useRouter } from "next/navigation";

const MovieCom = ({data}:{data:any}) => {
    const router = useRouter()
    const goToDetails = (id:any) => {
        router.push(`/Home/details/${id}`)
    }
    return (
        <Carousel opts={{align: "start",loop: true}}
        className="w-full">
            <CarouselContent>
                {data.map((item:any, index:any) => (
                    <CarouselItem key={index} onClick={()=>goToDetails(item.id)} className="basis-[80%] sm:basis-[40%] lg:basis-[30%]">
                        <div className="flex h-[300px] w-full justify-center cursor-pointer hover:scale-105 duration-300">
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
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-gray-500 dark:bg-black text-white"/>
            <CarouselNext className="-right-4 bg-gray-500 dark:bg-black text-white"/>
        </Carousel>
    );
}

export default MovieCom;
