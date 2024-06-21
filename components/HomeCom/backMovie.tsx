"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const BackMovie = ({data}:{data:any}) => {
    return (
        <Carousel opts={{align: "start",loop: true}} plugins={[Autoplay({delay: 2000,}),]} 
        className="w-full">
            <CarouselContent>
                {data.map((item:any, index:any) => (
                    <CarouselItem key={index}>
                        <div className="flex h-[100vh] w-full justify-center">
                            <div className="h-full w-full relative">
                                <Image src={`http://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} width={500} height={300} className="h-full w-full"/>
                                <div className="absolute inset-0 back2 z-10 h-full w-full">
                                    <div className="flex container items-center h-full">
                                        <div className="max-w-[500px]">
                                            <h1 className="text-3xl sm:text-5xl mb-3 text-white">{item.title}</h1>
                                            <p className="text-md sm:text-lg text-gray-300">{item.overview.slice(0,200)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

export default BackMovie;