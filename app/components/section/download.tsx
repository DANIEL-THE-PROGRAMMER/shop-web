import { Container } from "../container";
import Image from "next/image";

export const Download = () => {
  return (
    <Container>
      <div className="md:px-[119px] flex flex-col md:flex-row items-center gap-[105px] md:gap-[305px]">
        <div className="flex flex-col text-center md:text-start">
          <div className="text-black text-[48px] font-extrabold leading-[72px] font-poppins tracking-[2.88px]">
            <span>DOWNLOAD APP & GET THE VOUCHER!</span>
          </div>
          <div className="text-gray2 text-[24px] font-extrabold leading-[35px] font-poppins tracking-[-0.96px] mb-[65px] mt-[41px]">
            <span>
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </span>
          </div>
          <div className="flex flex-wrap items-center flex-col md:flex-row gap-[19px]">
            <div className="w-[204px] h-[71px] relative">
              <Image src="/assets/apple.png" alt="" fill={true} sizes="100%" />
            </div>
            <div className="w-[204px] h-[71px] relative">
              <Image src="/assets/google.png" alt="" fill={true} sizes="100%" />
            </div>
          </div>
        </div>
        <div className="h-[715px] w-full md:w-[645px] flex justify-center">
          <div className="md:w-[640px] relative h-[100%]">
            <div className="z-0 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
              <div className="md:w-[637px] h-[629px] flex justify-center items-center border-[2.5px] border-[#EFECEB] rounded-full bg-white">
                <div className="md:w-[537px] h-[530.256px] flex justify-center items-center border-[2.5px] border-[#EFECEB] rounded-full bg-white">
                  <div className="md:w-[440px] h-[434.474px] flex justify-center items-center border-[2.5px] border-[#EFECEB] rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="z-10 w-[320px] md:w-[527px] h-[650px] md:h-[920px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
              <Image
                src="/assets/Mobile app.png"
                alt="mobile app"
                fill={true}
                sizes="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
