import { CircleUserRound } from "lucide-react";
import Image from "next/image";

const CastCom = ({ele}:{ele:any}) => {
    return (
        <div className="border border-gray-600 rounded h-[300px]">
            {
                ele.profile_path === null?
                <div className="flex justify-center items-center h-[80%] w-full">
                    <CircleUserRound size={80} />
                </div>
                :
                <Image src={`http://image.tmdb.org/t/p/original/${ele.profile_path}`} alt={ele.name} width={500} height={250} className="w-full h-[80%] rounded-t"/>
            }
            <div className="py-2 px-2">
                <h1 className="font-semibold text-md">{ele.name}</h1>
                <h2>{ele.character}</h2>
            </div>
        </div>
    );
}

export default CastCom;
