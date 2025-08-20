import ButtonArea from "../components/ButtonArea";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";

function Show() {
    return (
        <div className="flex flex-col h-dvh md:flex-row ">
            <div className="md:basis-1/4  bg-[#14152a] ">
                <Navbar />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex-1 bg-[#0d111c] overflow-auto">
                    <Textarea />
                </div>
                <div className="flex-none bg-[#0d111c] text-[#ffffff] p-8 ">
                    <ButtonArea />
                </div>
            </div>
        </div>
    )
}

export default Show;