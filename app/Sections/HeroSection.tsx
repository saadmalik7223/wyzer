import CircularText from "@/components/CircularText";
export default function HeroSection() {
  return (
    <>
      <div className=" w-[100%] h-[100%] absolute top-0 left-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-center text-[72px] leading-none font-bingo font-normal mt-[200px]">
          Designed for <br /> thoughtful credit use.
        </h1>
        <p className="text-[24px] mt-10">
          Most people spend. Very few take the time to optimize.
        </p>
        <div className="border border-[1px] border-white/20 flex gap-7 px-4 py-3 mt-10 bg-white/10 backdrop-blur-[7px] rounded-[30px]">
          <p className="ml-5">See Your Best Match</p>
          <div>
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.4459L0 18.1237C0 24.7623 4.69903 27.4617 10.4378 24.1624L12.9973 22.6827C13.6172 22.3228 13.9971 21.6629 13.9971 20.9431V4.62648C13.9971 3.90663 13.6172 3.24677 12.9973 2.88685L10.4378 1.40715C4.69903 -1.89216 0 0.80728 0 7.4459Z"
                fill="#F9F9F9"
              />
              <path
                opacity="0.4"
                d="M15.9966 6.36604L15.9966 19.2234C15.9966 20.0032 16.8365 20.4831 17.4963 20.0832L19.6959 18.8034C25.4347 15.5041 25.4347 10.0653 19.6959 6.76595L17.4963 5.48622C16.8365 5.1063 15.9966 5.5862 15.9966 6.36604Z"
                fill="#F9F9F9"
              />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[50px] right-[50px] w-[100px] h-[100px]  ">
          <div className=" w-[100px] h-[100px] relative right-0 bottom-0  flex items-center justify-center ">
            <CircularText
              text=" WYZER * WYZER * WYZER *"
              onHover="speedUp"
              spinDuration={20}
              className="absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
}
