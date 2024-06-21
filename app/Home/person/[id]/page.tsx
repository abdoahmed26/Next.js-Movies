import { getData } from "@/Functions/getData"
import Person from "@/components/PersonCom/Person"

interface IProp {
    params:{
        id:string
    }
}

const Page = async({params}:IProp) => {
    const {id} = params
    const data = await getData(`https://api.themoviedb.org/3/person/${id}`)
    return (
        <div className="pt-24 pb-10">
            <div className="container">
                <div>
                    <Person data={data} />
                </div>
            </div>
        </div>
    );
}

export default Page;
