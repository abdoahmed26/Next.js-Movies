import AboutAs from "./AboutAs";
import Categray from "./Categray";
import Conact from "./Conact";
import Information from "./Information";

const MainFooter = () => {
    return (
        <div className="bg-[#191919] py-10">
            <div className="container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <AboutAs />
                    <Information />
                    <Categray />
                    <Conact />
                </div>
            </div>
        </div>
    );
}

export default MainFooter;
