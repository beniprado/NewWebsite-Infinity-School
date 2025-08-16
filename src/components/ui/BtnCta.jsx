import React from "react";          

const BtnCta = ({title,font, py, px}) => {
    return <button className={`text-xl md:text-${font} font-bold bg-white text-[#8B1E2B] py-${py} px-${px} rounded-full cursor-pointer hover:scale-110 duration-320 ease-in-out`}>{title}</button>
}

export default BtnCta