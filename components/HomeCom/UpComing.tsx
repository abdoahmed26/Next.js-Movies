import { getData } from "@/Functions/getData";
import MovieCom from "./MovieCom";
import TitleOfCom from "./titleOfCom";

const UpComing = async() => {
    const data = await getData('https://api.themoviedb.org/3/movie/upcoming')
    return (
        <div className="flex justify-center py-5">
            <div className="container">
                <TitleOfCom title="UPCOMING" view="upcoming"/>
                <div className="mt-5">
                    <MovieCom data={data.results} />
                </div>
            </div>
        </div>
    );
}

export default UpComing;