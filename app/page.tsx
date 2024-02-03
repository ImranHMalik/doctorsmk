import Image from "next/image";
import SCarousel from "./components/SCarousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="px-5 pb-3">
        <p className="text-xl lg:text-3xl font-medium font-roboto text-gray-600">
          Welcome to Doctors Malik & Khan’s Practice, your leading source for
          top-tier private GP services in Manchester and across the Northwest.
        </p>
      </div>
      <SCarousel />
      <div className="pt-4">
        <div>
          <p className="p1">
            Discover our extensive array of services, encompassing private
            appointments, occupational health evaluations, specialized travel
            clinic services, consultations for sexual health, and comprehensive
            family medicine.
          </p>
        </div>
        <div>
          <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
            <Image
              width={60}
              height={60}
              src="/assets/icons/gp.svg"
              alt=""
              className="mr-4"
            />
            <div className="flex flex-col">
              <p>Private GP Consultations</p>
              <p className=" font-light text-lg">
                We offer personalized one-on-one consultations, focusing on
                comprehensive healthcare, timely diagnosis, and tailored
                treatment plans to address individual patient needs and
                concerns.
              </p>
            </div>
          </div>
          <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
            <Image
              width={60}
              height={60}
              src="/assets/icons/check.svg"
              alt=""
              className="mr-4"
            />
            <div className="flex flex-col">
              <p>Wellness checks for peace of mind</p>
              <p className=" font-light text-lg">
                Comprehensive health assessments aimed at promoting overall
                well-being, identifying potential health risks, and offering
                personalized advice to encourage a healthy lifestyle.
              </p>
            </div>
          </div>
          <div className="bg-sky-500 font-bold text-2xl text-white flex flex-row rounded-lg p-4 m-2">
            <Image
              width={60}
              height={60}
              src="/assets/icons/immune.svg"
              alt=""
              className="mr-4"
            />
            <div className="flex flex-col">
              <p>Immunisations</p>
              <p className=" font-light text-lg">
                Administering a range of vaccinations to protect against
                infectious diseases, following recommended immunization
                schedules and providing expert guidance on vaccine choices.
              </p>
            </div>
          </div>
          <button className="p-4 rounded-lg bg-sky-500 font-bold text-xl text-white m-2 hover:bg-sky-400">
            <Link href="/services"> View All Services</Link>
          </button>
        </div>
        <div className="mt-8">
          <p className="p1">
            Beyond geographical boundaries, our commitment to excellence stands
            strong. Serving not just Manchester but the entire UK, we provide
            the convenience of remote appointments. For in-person care, our
            responsive scheduling system ensures timely attention to your health
            needs.
          </p>
          <button className="p-4 rounded-lg bg-sky-500 font-bold text-xl text-white m-2 hover:bg-sky-400">
            <Link href="/contact"> Contact Us</Link>
          </button>
        </div>
        <div className="mt-8">
          <p className="p1 my-4">
            Experience healthcare personalized to your requirements,
            administered by dedicated professionals. As your preferred choice
            for comprehensive medical services, we consistently strive to be the
            premier GP in Manchester and the Northwest. Choose Doctors Malik &
            Khan's Practice for a healthcare partnership prioritizing your
            well-being.
          </p>
          <button className="p-4 rounded-lg bg-sky-500 font-bold text-xl text-white m-2 hover:bg-sky-400">
            <Link href="/about">More About Us</Link>
          </button>
        </div>
      </div>
    </>
  );
}
