import React from "react";

export default function TrioCard({icon, title, description}) {
    return <div className="flex flex-col gap-5 items-center justify-center">
        {icon}
        <h3 className="font-bold text-2xl text-center">{title}</h3>
        <p className={`text-center max-w-md`}>{description}</p>
    </div>
}