
const Categray = () => {
    return (
        <div>
            <h1 className="font-bold text-white pb-2 relative border-b border-b-gray-500
            after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                CATEGORY
            </h1>
            <ul className="list-none text-gray-300 text-sm mt-3">
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Videos</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Gaming</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Travel</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Music</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Sports</span>
                </li>
            </ul>
        </div>
    );
}

export default Categray;
