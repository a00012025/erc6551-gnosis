import React from "react";

const LoyaltyCard = () => {
  return (
    <div className="w-[256px] shadow-lg px-8 py-4 bg-[#5e8d93] origin-top-left scale-[1.2]">
      <div className="flex flex-col">
        <header className="text-white text-xs text-center uppercase font-semibold tracking-wider border-b border-white pb-3">
          Buy 9 and get 1 for free
        </header>

        <div className="mt-4 flex justify-between">
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 bg-white"></div>
          <div className="w-8 h-8 border border-white">
            <div className="h-full flex justify-center items-center text-white uppercase font-bold tracking-wider">
              Free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
