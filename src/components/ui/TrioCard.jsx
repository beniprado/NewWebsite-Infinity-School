import React, { forwardRef } from "react";

const TrioCard = forwardRef(({ icon, title, description }, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-5 items-center justify-center">
      {icon}
      <h3 className="font-bold text-2xl text-center">{title}</h3>
      <p className="text-center max-w-md">{description}</p>
    </div>
  );
});

export default TrioCard;