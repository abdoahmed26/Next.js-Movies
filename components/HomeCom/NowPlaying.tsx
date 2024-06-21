import { getData } from "@/Functions/getData";
import MovieCom from "./MovieCom";
import TitleOfCom from "./titleOfCom";

const NowPlaying = async() => {
    const data = await getData('https://api.themoviedb.org/3/movie/now_playing')
    return (
        <div className="flex justify-center py-5">
            <div className="container">
                <TitleOfCom title="NOW PLAYING" view="now_playing"/>
                <div className="mt-5">
                    <MovieCom data={data.results} />
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;
