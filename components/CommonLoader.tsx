import { Loader2 } from "lucide-react";
import React from "react";

const LOADING_PHRASES = [
  "On our way to load awesome content!",
  "Hol' up! Wait a minute!",
  "Man, it's getting servicing requests. Hold on.",
  "Just a moment, I'm on it, can you calm a bit down?",
  "Brewing some digital coffee...",
  "Convincing the server to wake up...",
  "Loading... because staring at a spinner is fun!",
  "Patience, young padawan...",
  "Spinning the hamster wheel...",
  "Almost there... or is it?",
  "Feeding the bits and bytes...",
  "Loading awesomeness in 3... 2... 1...",
];

const CommonLoader = () => {
  return (
    <div className="z-[100000] bg-background fixed top-0 left-0 right-0 bottom-0 min-h-screen w-full flex flex-col gap-3 items-center justify-center">
      <div className="w-full bg-primary p-5 flex flex-col items-center justify-center">
        <Loader2 className="animate-spin" size={48} />
        <p className="text-xl font-bold">
          {LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]}
        </p>
      </div>
    </div>
  );
};

export default CommonLoader;
