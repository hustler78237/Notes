import ButtonArea from "../components/ButtonArea";
import Navbar from "../components/Navbar";
import Textarea from "../components/Textarea";
import { useState } from "react";
import { useEffect } from "react";

function Show() {

    // this logic for storing textarea in localStorage of browser
    const [text, setText] = useState(() => {
        let savedText = localStorage.getItem("text");
        return savedText ? JSON.parse(savedText) : "";
    })

    // this logic for storing title in localStorage of browser
    const [title, setTitle] = useState(() => {
        let savedTile = localStorage.getItem("Title");
        return savedTile ? JSON.parse(savedTile) : "";
    })

    useEffect(() => {
        localStorage.setItem("text", JSON.stringify(text))
    }, [text])



    useEffect(() => {
        localStorage.setItem("Title", JSON.stringify(title));
    }, [title])


    return (
        <div className="flex flex-col h-dvh md:flex-row ">
            <div className="md:basis-1/4  bg-[#14152a] ">
                <Navbar />
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex-1 bg-[#0d111c] overflow-auto">
                    <Textarea text={text} setText={setText} title={title} setTitle={setTitle} />
                </div>
                <div className="flex-none bg-[#0d111c] text-[#ffffff] p-8 ">
                    <ButtonArea text={text} setText={setText} />
                </div>
            </div>
        </div>
    )
}

export default Show;