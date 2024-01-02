"use client";
import Image from "next/image";
import Link from "next/link";
//w-3/5 at doctorsmk div
const Footer = () => {
  return (
    <section className="w-full  flex-center flex-col mt-8  ">
      <>
        <nav className=" z-30 flex-col flex-between  bg-gray-600 w-full  ">
          <div className="flex flex-row justify-between">
            <div className="flex  mr-3 h-[80px] justify-center items-center  text-gray-700 font-roboto">
              <p className="text-center font-normal font-roboto text-xl  text-white">
                DoctorsMK &copy; 2024
              </p>
            </div>
            <div className="hidden  flex-row gap-4 flex-1 h-[80px] justify-center items-center  text-gray-700 font-roboto">
              <Link href="" className="flex">
                <Image
                  src="/assets/icons/instagram-footer.svg"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="" className="flex">
                <Image
                  src="/assets/icons/x-twitter-footer.svg"
                  width={35}
                  height={35}
                />
              </Link>
              <Link href="" className="flex">
                <Image
                  src="/assets/icons/facebook-footer.svg"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>
        </nav>
      </>
    </section>
  );
};

export default Footer;
