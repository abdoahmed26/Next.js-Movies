import { getData } from "@/Functions/getData";
import CastCom from "./CastCom";
import CarouselCast from "./CarouselCast";


const Cast = async({id}:{id:string}) => {
    const data = await getData(`https://api.themoviedb.org/3/movie/${id}/credits`)
    const results = data.cast
    return (
        <div className="mt-8">
            {
                results.length > 0 ?
                <>
                    <h1 className="font-bold text-xl">Top Billed Cast</h1>
                    <CarouselCast results={results} />
                </>
                :null
            }
        </div>
    );
}

export default Cast;
