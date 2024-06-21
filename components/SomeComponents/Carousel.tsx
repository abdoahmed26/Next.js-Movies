"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import VideoCom from "./VideoCom";

const CarouselArray = ({results}:{results:any}) => {
    return (
        <Carousel opts={{align: "start",loop: true}}
            className="w-full mt-4">
            <CarouselContent>
                {
                    results.map((ele:any,index:any)=>(
                        <CarouselItem key={index} className="basis-[80%] sm:basis-[40%] lg:basis-[30%]">
                            <VideoCom ele={ele} />
                        </CarouselItem>
                ))
                }
            </CarouselContent>
            {
                results.length > 3 ? 
                <>
                    <CarouselPrevious className="-left-4 bg-gray-500 dark:bg-black text-white"/>
                    <CarouselNext className="-right-4 bg-gray-500 dark:bg-black text-white"/>
                </>
                :null
            }
            
        </Carousel>
    );
}

export default CarouselArray;