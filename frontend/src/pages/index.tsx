import React, { useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ConnectButton } from "@kryptogo/kryptogokit";

import { Book } from "@/components";
import ethTokyo from "/public/images/eth-tokyo.png";
import logo from "/public/images/logo.png";
import { useAccount } from "wagmi";
import { usePoaps } from "@/service/poap";
import clsx from "clsx";
import LoyaltyCard from "@/components/LoyaltyCard";
import BalanceCard from "@/components/BalanceCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { address } = useAccount();

  const [activeBook, setActiveBook] = useState<string>("");

  const { data: poaps, isLoading: poapIsLoading } = usePoaps(address!, {
    enabled: !!address,
  });

  return (
    <div
      className={`w-full h-screen ${inter.className} bg-[url("/images/background.png")] bg-cover bg-center relative`}
    >
      <header className="w-full h-[70px] flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" width={42.84} height={41} />
          <h1 className="text-[32px] text-[#5100FF] font-bold">POAP EX</h1>
        </div>

        <ConnectButton />
      </header>
      <div
        className={clsx(
          "absolute inset-0 bg-black/60 z-10 transition-opacity ease-in-out",
          {
            "opacity-0 invisible": !activeBook,
          }
        )}
        onClick={() => setActiveBook("")}
      ></div>
      <main className="p-6 h-[calc(100vh-70px)] container mx-auto space-y-6">
        <div className="space-y-4">
          <h2 className="text-[38px] font-bold">EVENT BOOKS</h2>
          <div className="grid grid-cols-[repeat(auto-fit,240px)] gap-[20px]">
            {poaps &&
              poaps.map((poap) => (
                <Book
                  key={poap.event.id}
                  cover={poap.event.image_url}
                  title={poap.event.name}
                  activeBook={activeBook}
                  setActiveBook={setActiveBook}
                />
              ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-[38px] font-bold">LOYALTY CARDS</h2>
          <div className="flex items-start gap-[80px]">
            <LoyaltyCard />
            <BalanceCard />
          </div>
        </div>
      </main>
    </div>
  );
}
