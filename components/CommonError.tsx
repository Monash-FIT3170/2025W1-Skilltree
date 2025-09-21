import { InfoIcon, Loader2 } from "lucide-react";
import React from "react";

const CommonError = ({ errorDescription }: { errorDescription?: string }) => {
  return (
    <div className="z-[100000] bg-background fixed top-0 left-0 right-0 bottom-0 min-h-screen w-full flex flex-col gap-3 items-center justify-center">
      <div className="w-full h-40 bg-destructive/70 text-foreground p-5 flex flex-col items-center justify-center">
        <InfoIcon size={48} />
        <p className="text-xl font-bold">
          {`${errorDescription}` || "An error occurred"}. Please try again!
        </p>
      </div>
    </div>
  );
};

export default CommonError;
