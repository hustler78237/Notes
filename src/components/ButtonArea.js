function ButtonArea ({text, setText}){

    

    function LowerCase(){
       setText(text.toLowerCase());
    }

    function UpperCase(){
        setText(text.toUpperCase());
    }

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base " onClick={()=>{UpperCase()}}>UpperCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base " onClick={()=> {LowerCase()}}>LowerCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base ">download</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base ">Copy</button>
        </div>
    )
}

export default ButtonArea;