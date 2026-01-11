export default function Shadeline({
  height = 2,
  marginY = 100,
}: {
  height?: number;
  marginY?: number;
}) {
  return (
    <div
      className={`my-[${marginY}px] w-full bg-gradient-to-r 
        from-transparent 
        via-[#FFA33D] 
        to-transparent`}
      style={{ height: `${height}px` }}
    />
  );
}
