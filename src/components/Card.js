import React from "react";

const Card = ({ title }) => {
  return (
    <div>
      <div className="bg-violet-900 flex justify-center rounded-lg shadow-md shadow-black">
        <div className="p-1.5 w-full m-2.5 mb-2.5 bg-violet-950 text-center rounded-lg shadow-xl border-2 border-dashed">
          <div className="flex items-center space-x-2 justify-center">
            <p className="text-slate-200 font-bold">{`>>> ${title} <<<`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
