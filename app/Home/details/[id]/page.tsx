import { getData } from "@/Functions/getData";
import DetailsCom from "@/components/SomeComponents/DetailsCom";

interface IProp {
    params : {
        id:string
    }
}

const Page = async({params}:IProp) => {
    const {id} = params;
    const data = await getData(`https://api.themoviedb.org/3/movie/${id}`)
    return (
        <div className="pt-24 pb-10">
            <div className="container">
                <div>
                    <DetailsCom item={data} />
                </div>
            </div>
        </div>
    );
}

export default Page;
