import { useState } from "react";

function Navbar() {

    let [active, setActive] = useState(0);
    // const [open, setOpen] = useState(false);

    return (
        <form>
            <div className="flex flex-row md:flex-col items-center   box-border  text-[#ffffff]  h-full  cursor-pointer overflow-auto relative">
                <p onClick={() => setActive(active = 1)} className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-4 py-2  rounded-lg transition active:scale-95 text-sm sm:text-base  ${active === 1 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] w-full text-center" : ""}`}>Textarea</p>
                <p onClick={() => setActive(active = 2)} className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-4 py-2 rounded-lg  transition active:scale-95 text-sm sm:text-base  ${active === 2 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] w-full text-center" : ""} `}>History</p>
                <p onClick={() => setActive(active = 3)} className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-4 py-2 rounded-lg  transition active:scale-95 text-sm sm:text-base  ${active === 3 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] w-full text-center" : ""}`}>Login</p>
                <p onClick={() => setActive(active = 4)} className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base  ${active === 4 ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] w-full text-center" : ""}`}>Sign Up</p>
                <button className="  mt-2 bg-gradient-to-r from-[#2a1452] to-[#4a128c] mb-4 px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base ">LogOut</button>
            </div>
        </form>
    );
}

export default Navbar;