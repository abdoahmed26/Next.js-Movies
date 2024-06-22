import { getData } from "@/Functions/getData";
import MovieCom from "../HomeCom/MovieCom";


const Recommendations = async({id}:{id:string}) => {
    const data = await getData(`https://api.themoviedb.org/3/movie/${id}/recommendations`)
    const results = data.results
    return (
        <div className="mt-8">
            {
                results.length > 0 ?
                <>
                    <h1 className="font-bold text-xl">Recommendations</h1>
                    <div className="mt-4"><MovieCom data={results} /></div>
                </>
                :null
            }
        </div>
    );
}

export default Recommendations;
