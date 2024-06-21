import Image from "next/image";
import LogForm from "./LogForm";


const Login = () => {
    return (
        <div className="bg-cover h-[100vh] w-full" style={{backgroundImage:`url(./background.jpg)`}}>
            <div className="h-full w-full back py-10 flex justify-center">
                <div className="container h-full">
                    <div className="h-full">
                        <Image src="/logo-dark.webp" alt="logo" width={150} height={150} />
                        <div className="flex justify-center items-center h-full">
                            <LogForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
