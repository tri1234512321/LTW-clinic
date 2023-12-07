import React from "react";
import "./Title.scss";

export default function Header({
    namePage
}){
    return(
        <div className='background-image h-[200px] sm:grid grid-cols-2 hidden'>
            <div id="healthService" className="text-5xl font-bold  mb-10 place-self-center pt-14">{namePage}</div>
        </div>
    )
}