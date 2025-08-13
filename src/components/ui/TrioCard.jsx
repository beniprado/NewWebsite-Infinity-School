import React from "react";

export default function TrioCard({icon, title, description}) {
    return <div className="flex flex-col gap-5 items-center justify-center">
        {icon}
        <h3 className="font-bold text-2xl">Certificado internacionalmente{title}</h3>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque inventore facilis, quis quos magnam id distinctio nobis error dolorem beatae sed earum nostrum a ipsa fuga aliquid laborum ratione?{description}</p>
    </div>
}