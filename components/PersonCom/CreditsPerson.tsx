import { getData } from "@/Functions/getData";
import CreditsCom from "./CreditsCom";

const CreditsPerson = async({id}:{id:string}) => {
    const data = await getData(`https://api.themoviedb.org/3/person/${id}/movie_credits`)
    const result = data.cast
    return (
        <div className="mt-8">
            <h1 className="font-bold text-xl">Known For</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                {
                    result.map((item:any)=>
                        <CreditsCom item={item} key={item.id} />
                    )
                }
            </div>
        </div>
    );
}

export default CreditsPerson;
