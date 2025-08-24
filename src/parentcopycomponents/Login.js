import Navbar from "../components/Navbar";
import LogForm from "../components/LogForm";

function Login() {
    return ( 
        <div className="flex flex-col h-dvh md:flex-row ">
            <div className="md:basis-1/4  bg-[#14152a] ">
                <Navbar />
            </div>
            <div className="flex flex-col flex-1 ">
                <div className="flex-1 bg-[#0d111c] overflow-auto text-[#ffffff]">
                    <LogForm />
                </div>
            </div>
        </div>
    );
}

export default Login;