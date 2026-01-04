import ScrambledText from "@/components/ScrambledText";
import { main } from "motion/react-client";

export default function ScrambledTextSection() {
  return (
    <main className="flex flex-col items-center ">
      <h1 className="text-2xl font-semibold font-bricolage">
        Principles That Define Our Approach
      </h1>
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:."
      >
        Wyzer focuses on clarity and transparency, no dark patterns, no hidden
        nudges. Recommendations are explained simply, affiliate relationships
        are disclosed, and your data is never sold or shared. Privacy comes
        first, because trust is earned through how things work, not what’s
        promised.
      </ScrambledText>
    </main>
  );
}
