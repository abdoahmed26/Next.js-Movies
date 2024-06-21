import { getData } from "@/Functions/getData";
import MovieCom from "./MovieCom";
import TitleOfCom from "./titleOfCom";

const Popular = async() => {
    const data = await getData('https://api.themoviedb.org/3/movie/popular')
    return (
        <div className="flex justify-center py-5">
            <div className="container">
                <TitleOfCom title="POPULAR" view="popular"/>
                <div className="mt-5">
                    <MovieCom data={data.results} />
                </div>
            </div>
        </div>
    );
}

export default Popular;