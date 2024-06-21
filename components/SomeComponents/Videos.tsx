import { getData } from "@/Functions/getData";
import CarouselArray from "./Carousel";


const Videos = async({id}:{id:string}) => {
    const data = await getData(`https://api.themoviedb.org/3/movie/${id}/videos`)
    const results = data.results
    return (
        <div className="mt-8">
            {
                results.length > 0 ?
                <>
                    <h1 className="font-bold text-xl">Offical videos from Youtube</h1>
                    <CarouselArray results={results} />
                </>
                :null
            }
            
        </div>
    );
}

export default Videos;
