import Link from "next/link";

interface IProp{
    title:string,
    view:string
}

const TitleOfCom = ({title,view}:IProp) => {
    return (
        <div className="flex pb-2 relative justify-between items-center border-b border-b-gray-500
        after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
            <h1 className="font-bold">{title}</h1>
            <Link href={`/Home/view/${view}`} className="uppercase px-2 py-1 font-bold text-xs bg-slate-800 text-white rounded">view more</Link>
        </div>
    );
}

export default TitleOfCom;
