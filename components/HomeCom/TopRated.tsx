import { getData } from "@/Functions/getData";
import MovieCom from "./MovieCom";
import TitleOfCom from "./titleOfCom";

const TopRated = async() => {
    const data = await getData('https://api.themoviedb.org/3/movie/top_rated')
    return (
        <div className="flex justify-center py-5">
            <div className="container">
                <TitleOfCom title="TOP RATED" view="top_rated"/>
                <div className="mt-5">
                    <MovieCom data={data.results} />
                </div>
            </div>
        </div>
    );
}

export default TopRated;