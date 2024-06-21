"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CastCom from "./CastCom";

const CarouselCast = ({results}:{results:any}) => {
    const router = useRouter()
    return (
        <Carousel opts={{align: "start",loop: true}}
            className="w-full mt-4">
            <CarouselContent>
                {
                    results.map((ele:any,index:any)=>(
                        <CarouselItem onClick={()=>router.push(`/Home/person/${ele.id}`)} key={index} className="basis-[80%] sm:basis-[40%] lg:basis-[30%] cursor-pointer">
                            <CastCom ele={ele} />
                        </CarouselItem>
                ))
                }
            </CarouselContent>
            <CarouselPrevious className="-left-4 bg-gray-500 dark:bg-black text-white"/>
            <CarouselNext className="-right-4 bg-gray-500 dark:bg-black text-white"/>
        </Carousel>
    );
}

export default CarouselCast;