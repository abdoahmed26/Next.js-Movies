import Image from "next/image";

const AboutAs = () => {
    return (
        <div>
            <h1 className="font-bold text-white pb-2 relative border-b border-b-gray-500 mb-5
            after:w-20 after:h-1 after:bg-red-600 after:absolute after:bottom-0 after:left-0">
                ABOUT US
            </h1>
            <Image src="/logo-dark.webp" alt="logo" width={150} height={150}/>
            <p className="text-gray-300 text-sm max-w-72 mt-5 leading-6">
                Pellentesque suscipit pellentesque luctus. Nulla vel tellus nec risus tempus feugiat. 
                Donec nibh orci, sollicitudin sit amet gravida at, varius sit amet sem.
            </p>
        </div>
    );
}

export default AboutAs;
