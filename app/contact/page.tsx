import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="hidden lg:flex">
          <Image
            width={1800}
            height={1600}
            src="/assets/images/ah/ah00183.jpg"
            alt=""
            className=" "
          />
        </div>
        <div className="flex lg:hidden">
          <Image
            width={1800}
            height={1600}
            src="/assets/images/ah/ah00143.jpg"
            alt=""
            className=" "
          />
        </div>
        <p className="h1 text-center pt-5">Contact Us</p>
        <p className="text-center text-2xl font-roboto font-semibold text-gray-800">
          The Alexandra Hospital
        </p>
        <p className="py-4 text-center text-xl font-roboto font-semibold text-gray-800">
          Mill Lane, Cheadle, Cheshire, SK82PX
        </p>

        <p className="px-4 font-bold text-gray-800 font-roboto text-2xl pb-3 text-center pt-5">
          Our Email
        </p>

        <div className="flex flex-col justify-center bg-lime-200 p-4">
          <p className="px-4 text-center font-semibold text-gray-800 font-roboto text-xl pb-3;">
            Dr. Mariyam Hassan Malik:
          </p>
          <p className="px-4 pt-4 text-center font-semibold text-gray-800 font-roboto text-xl pb-3;">
            drmalik@doctorsmk.com
          </p>
        </div>
        <div className="flex flex-col justify-center bg-sky-200 p-4">
          <p className="px-4 text-center font-semibold text-gray-800 font-roboto text-xl pb-3;">
            Dr. Mohammad Adil Khan:
          </p>
          <p className="px-4 pt-4 text-center font-semibold text-gray-800 font-roboto text-xl pb-3;">
            drkhan@doctorsmk.com
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
