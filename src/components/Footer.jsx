import { Facebook, Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#030712] text-emerald-200 font-mono flex justify-center items-center h-20 pb-24 lg:px-0 px-14">
      <div className="flex flex-col items-center gap-3">
        <p align="center">Design and Built by Katrine Camille Pacatang</p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/kathryncamille.muicopacatangii"
            target="_blank"
          >
            <Facebook className="w-6 text-emerald-500 hover:text-emerald-400" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/katrine-camille-pacatang-bb6063188/"
          >
            <Linkedin className="w-6 text-emerald-500 hover:text-emerald-400" />
          </a>
          <a target="_blank" href="https://github.com/camille98dev">
            <Github className="w-6 text-emerald-500 hover:text-emerald-400" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
