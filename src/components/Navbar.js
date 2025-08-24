import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

    let [active, setActive] = useState(0);
    const navigate = useNavigate();
    // const [open, setOpen] = useState(false);

    return (
        <form>
            <div
                className="
                    flex md:flex-col
                    items-center
                    bg-[#14152a] text-white
                    h-16 md:h-dvh  
                    px-2
                "
            >
                {/* Menu items */}
                <div className="flex flex-row md:flex-col gap-2 w-full">
                    <p onClick={() => {setActive(1); navigate("/");}}
                        className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-3 py-2 rounded-lg transition active:scale-95 
                        ${active === 1 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] text-center" : ""}`}>
                        Textarea
                    </p>
                    <p onClick={() => setActive(2)}
                        className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-3 py-2 rounded-lg transition active:scale-95 
                        ${active === 2 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] text-center" : ""}`}>
                        History
                    </p>
                    <p onClick={() => {setActive(3); navigate("/Login")}}
                        className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-3 py-2 rounded-lg transition active:scale-95 
                        ${active === 3 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] text-center" : ""}`}>
                        Login
                    </p>
                    <p onClick={() => {setActive(4); navigate("/Sign")}}
                        className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-3 py-2 rounded-lg transition active:scale-95 
                        ${active === 4 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] text-center" : ""}`}>
                        SignUp
                    </p>
                </div>

                {/* Logout button */}
                <button
                    className="
                        ml-auto md:ml-0   
                        mt-0 md:mt-auto   
                        bg-gradient-to-r from-[#2a1452] to-[#4a128c]
                        px-4 py-2 rounded-lg transition active:scale-95
                        md:mb-4
                    "
                >
                    LogOut
                </button>
            </div>
        </form>
    );
}

export default Navbar;