"use client"

import Image from "next/image";
import Countdown from "../countdown";
import { ArrowRight } from "lucide-react";

export const Introduction = () => {

  const targetDate = new Date(Date.UTC(2049, 11, 31, 23 + 3, 59, 59));
  
  return (
    <div>
      <Image src={"/oceano-7.svg"} alt="introduction" fill className="mt-[-1%]" />
      <div className="hero rounded-xl min-h-144 mt-6">
        <div className="hero-content text-center">
          <div className="w-full space-y-4">
            <h1 className="text-6xl text-sky-400 font-bold">Os oceanos estão morrendo</h1>
            <p className="mb-5 px-12">Junte-se a nós para salvar os mares! As águas nos oceanos estão acabando a cada segundo <br/> Sua ajuda é crucial agora!</p>
            <Countdown targetDate={targetDate} />
            <a className="btn btn-link text-white"><p className="flex items-center justify-center gap-x-1">Quero ajudar os aceanos <ArrowRight size={16}/></p> </a>
          </div>
        </div>
      </div>
    </div>
  );
};
