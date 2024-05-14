import { HandCoins } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <HandCoins className="stroke h-11 w-11 stroke-emerald-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-xl md:text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Financipal
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-xl md:text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Financipal
      </p>
    </a>
  );
}

export default Logo;
