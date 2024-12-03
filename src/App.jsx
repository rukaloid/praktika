import logo1 from "./img/logo1.svg"
import arr1 from "./img/arr1.svg"
import logo2 from "./img/logo2.svg"
import logo3 from "./img/logo3.svg"
import logo4 from "./img/logo4.svg"
import logo5 from "./img/logo5.svg"
import logo6 from "./img/logo6.svg"
import arr2 from "./img/arr2.svg"
import arr3 from "./img/arr3.svg"
import product1 from "./img/product1.svg"
import arr4 from "./img/arr4.svg"
import logo7 from "./img/logo7.svg"
import arr5 from "./img/arr5.svg"
import stick1 from "./img/stick1.svg"


function App() {
  return (
    <>
      <div className="allies">
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
        <div className="product-all1 flex">
          <div className="product1 flex-col items-center w-[720px] h-[720px]">
            <div className="levo flex">
              <img src={arr2} alt="" className="w-[32px] h-[376px] px-1 py-1.5 justify-center items-center inline-flex" />
              <img src={product1} alt="" className="w-[400px] h-[376px] px-[34px] py-[11px] rounded-lg justify-center items-center inline-flex" />
              <img src={arr3} alt="" className="w-[32px] h-[376px] px-1 py-1.5 justify-center items-center inline-flex" />
            </div>
            <div className="w-72 h-20 flex-col justify-end items-center gap-5 inline-flex pl-40">
              <div className="self-stretch text-center text-[#111111] text-xl font-medium font-['Inter'] leading-loose">Basic Shirt</div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-center text-black text-lg font-semibold font-['Inter'] leading-relaxed">€49</div>
              </div>
            </div>
          </div>
          <div className="pravo flex pt-[628px] pl-[40px]">
            <div className="h-14 px-6 py-4 bg-[#111111] rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-base font-bold font-['Inter'] leading-normal">Shop Shirts</div>
            </div>
          </div>
        </div>
        <div className="product-all2 flex items-center justify-center">
          <div className="mt-[64px]">
            <div className="product2">
              <div className="w-96 h-96 relative rounded-lg">
                <div className="px-6 py-4 left-[40px] top-[540px] absolute bg-[#111111] rounded-lg justify-center items-center gap-2 inline-flex">
                  <div className="text-center text-white text-base font-bold font-['Inter'] leading-normal">Shop Sweaters</div>
                </div>
              </div>
            </div>
          </div>
          <div className="product2-2 pt-[64px] pl-[24px]">
            <div className="w-[596px] h-[636px] p-10 bg-[#fb791c] rounded-lg flex-col justify-between items-start inline-flex">
              <div className="self-stretch grow shrink basis-0 text-black text-4xl font-bold font-['Inter'] leading-10">“ First Light promises quality, timeless designs and with our mission it is truly a buy it for life purchase. “</div>
              <div className="self-stretch grow shrink basis-0 text-black text-xl font-bold font-['Inter'] leading-loose "><p className="pt-60 ">— Guera Latissa, Creative Director</p></div>
            </div>
          </div>
        </div>
        <div className="product-all3 flex items-center justify-center">
          <div className="product3-1 flex">
            <div className="w-[58px] h[20px] pt-[580px] pl-[40.5px]">
              <div className="h-5 justify-start items-start gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-['Inter'] uppercase leading-tight tracking-wide">women</div>
                <div className="w-5 h-5 px-1 py-1 justify-center items-center flex" />
              </div>
            </div>
            <img src={arr4} alt="" className="w-[13px] h-[13px] mt-[586px] ml-[52px]" />
          </div>
          <div className="product3-2 flex">
            <div className="w-[58px] h[20px] pt-[580px] pl-[40.5px]">
              <div className="h-5 justify-start items-start gap-2 inline-flex">
                <div className="text-black text-sm font-medium font-['Inter'] uppercase leading-tight tracking-wide">men</div>
                <div className="w-5 h-5 px-1 py-1 justify-center items-center flex" />
              </div>
            </div>
            <img src={arr4} alt="" className="w-[13px] h-[13px] mt-[586px] ml-[25px]" />
          </div>
        </div>
        <div className="Social-proof flex">
          <div className="proof1 items-center">
            <div className="text2 mt-[64px] items-center">
              <div className="w-[1217px] h-[49px] text-center text-[#111111] text-4xl font-extrabold font-['Inter'] leading-10">Hot off the press</div>
            </div>
            <div className="text3 flex justify-center items-center">
              <div className="t1">
                <img src={logo7} alt="" />
                <div className="h-32 flex-col justify-start items-start gap-6 inline-flex">
                  <div className="w-32 h-6 px-px justify-center items-center inline-flex" />
                  <div className="self-stretch text-black text-lg font-medium font-['Inter'] leading-relaxed">“First Light: Where great design <br/> and the finest materials unite in <br/> ultimate comfort”</div>
                </div>
                <div className="text-center text-[#a857f9] text-sm font-bold font-['Inter'] flex mt-[40px] uppercase leading-tight tracking-wide">Read article<img src={arr5} alt="" /></div>
              </div>
              <div className="stick1">
                <img src={stick1} alt="" />
              </div>
              <div className="t2">
              </div>
              <div className="t3">
              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  );
}

export default App;
