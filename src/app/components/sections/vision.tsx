import React from "react";
import { CardAbout } from "../card-about";
import { Earth, Recycle, Shield } from "lucide-react";
import { TechCard } from "../tech-card";

const VisionSection = () => {
  return (
    <div className="w-full px-60 mt-[-1%]">
      <div className="flex justify-center text-black">
        <div className="pt-10 grid grid-cols-3 gap-x-4">
          <CardAbout
            title="Sustentabilidade e Inovação"
            desc="Implementamos tecnologias de ponta para transformar resíduos marinhos em recursos valiosos, promovendo uma economia circular e sustentável"
            icon={<Recycle size={36} />}
          />
          <CardAbout
            title="Proteção e Preservação"
            desc="Nosso compromisso é proteger os ecossistemas marinhos através de soluções eficazes de coleta e reciclagem, garantindo um futuro saudável para nossos oceanos."
            icon={<Shield size={36}/>}
          />
          <CardAbout
            title="Conscientização Global"
            desc="Educamos comunidades e colaboramos globalmente para aumentar a conscientização sobre a importância da gestão de resíduos e a preservação dos mares"
            icon={<Earth size={36}/>}
          />
        </div>
      </div>
      <TechCard />
    </div>
  );
};

export default VisionSection;
