import Image from "next/image";
import Link from "next/link";
import { PayDayResponsiveone } from "./components/paydayresp";

export const PayDay = () => {
  return (
    <div className="gradient">
      <div className="flex flex-col md:flex-row justify-center">
        <div
          style={{ width: "calc(100% - 991.425px)" }}
          className="min-h-[968px] hidden md:flex relative"
        >
          <Image
            src="/assets/image 12.png"
            alt="imag12"
            width={0}
            height={0}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "scale-down",
            }}
            sizes="100%"
          />
        </div>
        <PayDayResponsiveone>
          <div className="font-semibold font-poppins max-w-[541px] min-h-[130px] flex relative items-center">
            <div className="absolute w-full h-full bg-white rotate-[-2.004deg]"></div>
            <span className="h-[100%] relative z-10 flex items-center pl-[26px] font-extrabold text-[46px] leading-[137px] md:text-[111.60px]">
              PAYDAY
            </span>
          </div>
          <div className="font-poppins font-extrabold text-[46px] md:text-[111.60px] leading-[137px]">
            <span>SALENOW</span>
          </div>
          <div className="mt-[33px]">
            <span className="text-brown2 font-poppins text-[36px] font-medium tracking-[0.721px] leading-[52px]">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </span>
          </div>
          <div className="mt-[33px]">
            <span className="text-black text-[36px] font-bold leading-[52px] tracking-[0.721px] font-poppins">
              1 June - 10 June 2021
            </span>
          </div>
          <div className="mt-[10px] mb-[51px]">
            <span className="text-black text-[36px] font-regular leading-[52px] tracking-[0.721px] font-poppins">
              *Terms & Conditions apply
            </span>
          </div>
          <Link
            href="/"
            className="min-h-[82px] flex items-center font-poppins font-medium text-[38px] bg-black text-white px-[40px] rounded-[10px]"
          >
            Shop Now
          </Link>
        </PayDayResponsiveone>
      </div>
    </div>
  );
};
