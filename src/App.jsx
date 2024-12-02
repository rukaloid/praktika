import logo1 from "./img/logo1.svg"
import arr1 from "./img/arr1.svg"
import logo2 from "./img/logo2.svg"
import logo3 from "./img/logo3.svg"
import logo4 from "./img/logo4.svg"
import logo5 from "./img/logo5.svg"
import logo6 from "./img/logo6.svg"


function App() {
  return (
    <>
      <div className="Banner">
        <div className="banner w-[1440px] h-11 px-4 py-3 bg-[#fb791c] flex-col justify-start items-start gap-2 inline-flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
            </div>
            <div className="grow shrink basis-0 text-center text-[#222222] text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">Summer sale up to 50% off</div>
            <div className="justify-start items-start gap-3 flex">
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
              <div className="w-2 h-2 opacity-50 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="Header">
        <div className="Header1">
          <img src={logo1} alt="" className="w-[1440px] h-[169px] pt-[14.78px] pb-[16.08px] justify-center items-center inline-flex" />
        </div>
        <div className="Header2">
          <div className="text1">
            <p className="w-[360px] text-white text-[32px] font-bold font-['Inter'] leading-[38.40px]">Spring Season</p>
            <p className="text-right text-white flex text-sm font-bold font-['Inter'] uppercase leading-tight tracking-wide">view collection<img src={arr1} alt="" /></p>
          </div>
        </div>
      </div>
      <div className="Proof">
        <div className="logos">
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>

    </>


  );
}

export default App;
