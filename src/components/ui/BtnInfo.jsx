import React from "react";

const BtnInfo = ({title, bg, cl, hover}) => {
    return (<button className={`flex items-center text-xl bg-[#9D1A1A] py-3 px-6 rounded-xl text-${cl} 
        hover:bg-[#6A0000] cursor-pointer transition duration-300`}>{title}</button>)
}

export default BtnInfo