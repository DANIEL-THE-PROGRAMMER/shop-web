import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

export const NavBar = () => {
  return (
    <Container>
      <div className="pt-[46px] pb-[56px] flex justify-between items-center">
        <div className="relative w-[137px]  md:w-[237px] h-[40px] md:h-[60px]">
          <Image
            src="/assets/logonav.png"
            alt="logo"
            fill={true}
            sizes="100%"
          />
        </div>
        <div className="hidden md:flex">
          <ul className="text-black2 font-poppins text-[22px] font-medium tracking-[0.22px] flex gap-[65px] items-center">
            <li className="">
              <Link href="/">CATALOGUE</Link>
            </li>
            <li className="">
              <a href="#fashion">FASHION</a>
            </li>
            <li className="">
              <a href="#favourite">FAVOURITE</a>
            </li>
            <li className="">
              <Link href="/">LIFESTYLE</Link>
            </li>
            <li>
              <Link
                className="bg-black text-white  min-h-[63px] px-[22px] flex justify-center items-center rounded-[7px]"
                href="/"
              >
                SIGN UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
