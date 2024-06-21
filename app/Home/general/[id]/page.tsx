import { getData } from "@/Functions/getData";
import ViemCom from "@/components/SomeComponents/ViemCom";

interface IProp{
    params:{
        id:string
    },
    searchParams: {
        name: string;
    };
}

const Page = async({params,searchParams}:IProp)=>{
    const {id} = params;
    const {name} = searchParams;
    const data = await getData(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}`)
    const {results} = data;
    return(
        <div className="pt-24 pb-10">
            <div className="container">
                <h1 className="font-bold text-3xl mb-6">
                    Results for <span className="capitalize">{name}</span>
                </h1>
                <h1 className="font-bold text-sm pb-2 relative border-b border-b-gray-500
                after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                    GENRE
                </h1>
                <div>
                    {
                        results.map((ele:any,index:any)=> <ViemCom item={ele} key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}
export default Page;
