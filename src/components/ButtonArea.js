function ButtonArea (){
    return (
        <div className="flex justify-center gap-4">
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 ">UpperCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 ">LowerCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 ">download</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 ">Copy</button>
        </div>
    )
}

export default ButtonArea;