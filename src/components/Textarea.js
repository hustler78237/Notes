function Textarea() {
    return (
        <div className="flex flex-col  items-center justify-center justify-between mt-12 gap-4 ">
            <input type="text" className="w-96 h-10 bg-[#14152a] font-semibold text-[#ffffff] text-center focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg" placeholder="Enter Your Note Heading"/>
            <textarea rows="30" cols="80" wrap="soft" className="bg-[#14152a] text-[#ffffff] focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg p-4" placeholder="Enter your Note here"></textarea>
        </div>
    )
}

export default Textarea;