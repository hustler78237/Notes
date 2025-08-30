function ButtonArea ({text, setText, title }){

    function LowerCase(){
       setText(text.toLowerCase());
    }

    function UpperCase(){
        setText(text.toUpperCase());
    }

    function handleDownload(){
        const content = `Title : ${title}\n\n${text}`;

        const blob = new Blob([content], {type: "text/plain"});
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = `${title}.txt`;
        link.click();

        URL.revokeObjectURL(url);
    }


    function copy(){
        navigator.clipboard.writeText(text)
        .then(()=>{
            alert("Text copied to Clipboard");
        })
        .catch(err => {
            console.error("Failed to Copy: ", err);
        })
    }
    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base " onClick={()=>{UpperCase()}}>UpperCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base " onClick={()=> {LowerCase()}}>LowerCase</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base "onClick={()=>{handleDownload()}}>download</button>
           <button className=" bg-gradient-to-r from-[#2a1452] to-[#4a128c]  px-4 py-2 rounded-lg transition active:scale-95 text-sm sm:text-base " onClick={()=>{copy()}}>Copy</button>
        </div>
    )
}

export default ButtonArea;