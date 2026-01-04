import ScrollReveal from "@/components/ScrollReveal";

export default function ScrollRevealSection() {
  return (
    <>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Most credit cards offer more than they reveal. Wyzer brings structure
        and intelligence to credit usage, uncovering hidden value, guiding
        better choices, and turning everyday spending into a smarter, quietly
        rewarding experience.
      </ScrollReveal>
    </>
  );
}
