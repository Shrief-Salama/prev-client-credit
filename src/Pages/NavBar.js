import React from "react";

const NavBar = () => {
  const subTitleName = ">>> Previous Clients Credit Limit Calculator <<<";
  return (
    <div>
      <div className="bg-violet-900 flex justify-center rounded-b-lg shadow-md shadow-black">
        <div className="w-full mx-2.5 mb-2.5 bg-violet-950 text-center rounded-b-lg shadow-xl border-x-2 border-b-2 border-dashed">
          <div className="flex items-center space-x-2 justify-center">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="text-yellow-200 font-bold text-3xl py-2.5">MYLO</p>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-slate-200 font-bold py-2.5">{subTitleName}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
