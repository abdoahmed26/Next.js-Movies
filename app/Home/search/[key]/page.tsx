import { getData } from "@/Functions/getData";
import ViemCom from "@/components/SomeComponents/ViemCom";

interface IProp {
    params:{
        key:string
    }
}

const Page = async({params}:IProp) => {
    const {key} = params;
    const data = await getData(`https://api.themoviedb.org/3/search/movie?query=${key}`)
    const results = data.results;
    return (
        <div className="pt-24 pb-10">
            <div className="container">
                <h1 className="font-bold text-3xl mb-6">
                    Results of <span className="capitalize">{key}</span>
                </h1>
                <h1 className="font-bold text-sm pb-2 relative border-b border-b-gray-500
                after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                    SEARCHED MOVIES
                </h1>
                <div>
                    {
                        results.map((ele:any,index:any)=> <ViemCom item={ele} key={index}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Page;
