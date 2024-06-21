import { getData } from "@/Functions/getData";
import ViemCom from "@/components/SomeComponents/ViemCom";

interface IProp {
    params: {
        title:string
    }
}

const Page = async({params}:IProp) => {
    const title = params.title
    const data = await getData(`https://api.themoviedb.org/3/movie/${title}`)
    const results = data.results;
    return (
        <div className="pt-24 pb-10">
            <div className="container">
                <h1 className="font-bold text-3xl pb-4 relative border-b border-b-gray-500
                after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                    Results of <span className="capitalize">{title.split("_").join(" ")}</span>
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
