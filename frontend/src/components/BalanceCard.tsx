import React from "react";
import { AiFillTrophy } from "react-icons/ai";

const BalanceCard = () => {
  return (
    <div
      className="rounded-xl w-[320px] p-4 flex flex-col gap-3 relative origin-top-left overflow-hidden font-semibold"
      style={{
        backgroundImage: "linear-gradient(to right, #ffff00 0%, #ffde45 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="absolute top-0 left-0 opacity-[0.2] brightness-0 w-full h-full bg-[url('https://dl.airtable.com/.attachments/422a40c071003be32d62e56d3c09dd8e/1aa6b4ad/Kratos_Agape_Logo_2021_v2.png')] bg-left bg-[length:150%] hover:bg-[length:180%] transition-all ease"></div>
      <div className="w-full flex items-center justify-between">
        <h2>LOYALTY BALANCE</h2>
        <h2>#001</h2>
      </div>
      <div className="w-full flex items-center justify-between text-[45px] font-bold">
        <AiFillTrophy /> 1,659,495
      </div>
      <p>1,000 points till next reward</p>

      <div className="w-full border-[0.5px] border-black   opacity-50"></div>

      <div className="flex items-center justify-between">
        <p>Kratos Agape</p>
        <p>Gold Member</p>
      </div>
    </div>
  );
};

export default BalanceCard;
