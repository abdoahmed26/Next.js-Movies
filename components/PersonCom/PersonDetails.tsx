import Image from "next/image";

const PersonDetails = ({item}:{item:any}) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center gap-5 mt-8">
                <div className="h-[300px] max-w-[400px] hover:scale-105 duration-300">
                    <div className="h-full w-[300px] sm:w-[400px] relative">
                        <Image src={`http://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} width={500} height={300} className="h-full w-full rounded"/>
                    </div>
                </div>
                <div className="max-w-[700px]">
                    <h1 className="text-md font-bold mb-3 ">
                        {item.name}
                    </h1>
                    <p className="text-sm mb-2 leading-6">{item.biography.slice(0,500)}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Known For:</span> {item.known_for_department}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Gender:</span> {item.gender === 2 ? "Male" : "Female"}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Birthdate:</span> {item.birthday}</p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">
                        Also Known As:</span> {item.also_known_as.map((ele:any)=>`${ele}, `)}
                    </p>
                    <p className="text-sm mb-2"><span className="text-gray-600 dark:text-gray-300">Place of Birth:</span> {item.place_of_birth}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonDetails;
