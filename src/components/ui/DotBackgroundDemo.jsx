import { cn } from "../../lib/utils";
import FlipWordsDemo from "../../components/ui/flip-words-demo"

function DotBackgroundDemo() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute z-50 inset-0 flex items-center justify-center bg-gradient-to-b from-[#000] via-[#111] to-[#000] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <p className="relative z-20">
        <FlipWordsDemo />
      </p>
    </div>
  );
}

export default DotBackgroundDemo;
