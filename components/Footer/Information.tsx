
const Information = () => {
    return (
        <div>
            <h1 className="font-bold text-white pb-2 relative border-b border-b-gray-500
            after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                INFORMATION
            </h1>
            <ul className="list-none text-gray-300 text-sm mt-3">
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">About us</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Contact us</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Terms & Conditions</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Privacy Policy</span>
                </li>
                <li className="group border-b border-b-gray-700 py-2 cursor-pointer">
                    <span className="inline-block group-hover:bg-red-500 duration-300 mr-3 w-2 h-2 rounded-full border border-red-500"></span>
                    <span className="group-hover:text-white duration-300">Press</span>
                </li>
            </ul>
        </div>
    );
}

export default Information;
