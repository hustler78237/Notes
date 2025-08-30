import { useState, useEffect } from "react";

function Textarea() {

  // this logic for storing title in localStorage of browser
  const[title, setTitle] = useState(()=>{
    let savedTile = localStorage.getItem("Title");
    return savedTile ? JSON.parse(savedTile) : "";
  })
  // this logic for storing textarea in localStorage of browser
  const [textarea , setTextarea] = useState(() => {
    let savedText = localStorage.getItem("text");
    return savedText ? JSON.parse(savedText) : "";
  })

  useEffect(()=>{
    localStorage.setItem("Title", JSON.stringify(title));
  },[title])
  
  useEffect(()=>{
    localStorage.setItem("text" , JSON.stringify(textarea))
  },[textarea])
  


    return (
        <div className="flex flex-col items-center gap-4 p-4 h-full">
      {/* Input heading */}
      <input
        type="text"
        className="w-full max-w-lg h-10 bg-[#14152a] font-semibold text-[#ffffff] text-center focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg"
        placeholder="Enter Your Note Heading"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
      />

      {/* Textarea auto-fits container */}
      <textarea
        className="w-full flex-1 bg-[#14152a] text-[#ffffff] focus:border-white focus:ring-2 focus:ring-indigo-600 focus:outline-none shadow-2xl rounded-lg p-4 resize-none"
        placeholder="Enter your Note here"
        value={textarea}
        onChange={(e)=> setTextarea(e.target.value)}
      ></textarea>
    </div>
    )
}

export default Textarea;