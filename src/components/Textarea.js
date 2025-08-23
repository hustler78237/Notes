function Textarea() {
    return (
        <div className="flex flex-col items-center gap-4 p-4 h-full">
      {/* Input heading */}
      <input
        type="text"
        className="w-full max-w-lg h-10 bg-[#14152a] font-semibold text-[#ffffff] text-center focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg"
        placeholder="Enter Your Note Heading"
      />

      {/* Textarea auto-fits container */}
      <textarea
        className="w-full flex-1 bg-[#14152a] text-[#ffffff] focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg p-4 resize-none"
        placeholder="Enter your Note here"
      ></textarea>
    </div>
    )
}

export default Textarea;