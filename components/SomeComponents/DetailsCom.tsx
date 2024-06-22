import Image from "next/image";
import Videos from "./Videos";
import Cast from "./Cast";
import Recommendations from "./Recommendations";

const DetailsCom = ({item}:{item:any}) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center gap-5 mt-8">
                <div className="h-[300px] max-w-[400px] cursor-pointer hover:scale-105 duration-300">
                    <div className="h-full w-[300px] sm:w-[400px] relative">
                        {
                            item.poster_path === null ? 
                            <p className="flex h-full justify-center items-center">
                                <span>No Image!</span>
                            </p>
                            :<Image src={`http://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path}`} alt={item.title} width={500} height={300} className="h-full w-full"/>
                        }
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#1A1C29]/80 z-10 h-full w-full">
                        </div>
                    </div>
                </div>
                <div className="max-w-[700px]">
                    <h1 className="text-md font-bold border-b dark:border-b-white mb-3 ">
                        {item.title} ({item.release_date.split("-")[0]})
                    </h1>
                    <p className="text-sm mb-2 leading-6">{item.overview}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">IMDB:</span> {item.vote_average}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Votes:</span> {item.vote_count}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Release Data:</span> {item.release_date}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">
                        Genres:</span> {item.genres.map((ele:any)=>`${ele.name}, `)}
                    </p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Tag Line:</span> {item.tagline}</p>
                    <p className="text-green-500 text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-300">Status:</span> {item.status}
                    </p>
                </div>
            </div>
            <Cast id={item.id} />
            <Videos id={item.id}/>
            <Recommendations id={item.id}/>
        </div>
    );
}

export default DetailsCom;
