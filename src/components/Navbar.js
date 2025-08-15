import { useState } from "react";

function Navbar () {

    const [active , setActive] = useState(false);

    return(
        <form>
            <div className="flex flex-col items-center box-border bg-[#14152a] text-[#ffffff]  h-dvh  cursor-pointer">
                <p onClick={()=> setActive(!active)} className={`hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] hover:px-4 py-2 rounded transition duration-300 ease-in hover:scale-150 ${active ? "bg-gradient-to-r from-[#2a1452] to-[#4a128c] scale-150":""}`}>Textarea</p>
                <p className="hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] hover:px-4 py-2 rounded transition duration-300 ease-in hover:scale-150">History</p>
                <p className="hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] hover:px-4 py-2 rounded transition duration-300 ease-in hover:scale-150">Login</p>
                <p className="hover:bg-gradient-to-r from-[#2a1452] to-[#4a128c] hover:px-4 py-2 rounded transition duration-300 ease-in hover:scale-150">Sign Up</p>
                <button className="mt-auto">LogOut</button>
            </div>
        </form>
    );
}

export default Navbar;