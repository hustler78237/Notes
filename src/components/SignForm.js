function SignForm() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="flex flex-col justify-center bg-[#14152a] p-4 rounded-lg shadow-2xl object-contain ">
                <label>Name</label>
                <div>
                    <input type="text" className="rounded-lg text-black p-1 w-80 focus:border-white focus:ring-4 focus:ring-indigo-600 focus:outline-none font-medium" placeholder="Name"></input>
                </div>
                <label>Username</label>
                <div>
                    <input type="text" className="rounded-lg text-black p-1 w-80 focus:border-white focus:ring-4 focus:ring-indigo-600 focus:outline-none font-medium" placeholder="Username"></input>
                </div>
                <label>Email</label>
                <div>
                    <input type="email" className="rounded-lg text-black p-1 w-80 focus:border-white focus:ring-4 focus:ring-indigo-600 focus:outline-none font-medium" placeholder="Email"></input>
                </div>
                <label>Password</label>
                <div>
                    <input type="text" className="rounded-lg text-black p-1 w-80 focus:border-white focus:ring-4 focus:ring-indigo-600 focus:outline-none font-medium" placeholder="Password"></input>
                </div>
                <label>Confirm Password</label>
                <div>
                    <input type="text" className="rounded-lg text-black p-1 w-80 focus:border-white focus:ring-4 focus:ring-indigo-600 focus:outline-none font-medium" placeholder="Confirm Password"></input>
                </div>
                <button className="bg-gradient-to-r from-[#2a1452] to-[#4a128c]
                        px-4 py-2 rounded-lg transition active:scale-95 mt-3 
                         ">SignUp</button>
            </form>
        </div>
    );
}

export default SignForm;