import ButtonArea from "../components/ButtonArea";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";

function Show () {
    return(
        <div className="flex flex-row">
        <div className="basis-1/4 border-2 border-indigo-600">
        <Navbar/>
        </div>
        <div className="basis-1/2 border-2 border-indigo-600">
        <Textarea/>
        </div>
        <div className = 'basis-1/4 border-2 border-indigo-600'>
        <ButtonArea/>
        </div>
        </div>
    )
}

export default Show;