import MainFooter from "@/components/Footer/main";
import Header from "@/components/HomeCom/Header";
import { ReactNode } from "react";

interface IProp {
    children : ReactNode
}

const Layout = ({children}:IProp) => {
    return (
        <div>
            <div><Header/></div>
            <div>{children}</div>
            <div><MainFooter/></div>
        </div>
    );
}

export default Layout;
