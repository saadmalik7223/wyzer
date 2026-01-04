export default function Shadeline({ height = 2 }) {
  return (
    <div
      className={`my-[100px] w-full bg-gradient-to-r 
        from-transparent 
        via-[#FFA33D] 
        to-transparent`}
      style={{ height: `${height}px` }}
    />
  );
}
