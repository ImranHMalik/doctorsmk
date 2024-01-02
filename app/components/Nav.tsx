"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
const Nav = () => {
  return (
    <>
      <nav className="z-50 shadow-slate-500 shadow-md   fixed top-0 bg-white w-full py-2.5 px-2">
        <div className="flex justify-between">
          <div className="flex pl-1 md:pl-3 lg:pl-6 pr-2">
            <Link href="/">
              <Image
                src="/assets/images/doctorsmklogobannerlong.png"
                alt="logo"
                width={500}
                height={240}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden xl:block text-2xl text-gray-700 top-2  space-x-5 hover:text-gray-800 font-thin font-roboto relative mr-5">
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/contact">Contact Us</Link>
            <Menu as="div" className="relative inline-block text-left bottom-1">
              <div>
                <Menu.Button className=" rounded-md  font-semibold text-gray-600">
                  <div className=" bg-gray-600 text-white  rounded-full p-3 font-medium text-2xl  hover:bg-gray-600 ">
                    Book an Appointment
                  </div>
                </Menu.Button>
              </div>
              <Menu.Items className="origin-top-left absolute left-0 top-[50px] font-semibold text-lg mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.circlehealthgroup.co.uk/online-booking?consultant=C7079228"
                        className={`${
                          active
                            ? "bg-lime-200 text-gray-900"
                            : "bg-lime-100 text-gray-700"
                        } block px-4 py-2 `}
                      >
                        Appointment with Dr. Mariyam Hassan Malik
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="https://www.circlehealthgroup.co.uk/online-booking?consultant=C7084146"
                        className={`${
                          active
                            ? "bg-sky-200 text-gray-900"
                            : " bg-sky-100 text-gray-700"
                        } block px-4 py-2 `}
                      >
                        Appointment with Dr. Mohammad Adil Khan
                      </a>
                    )}
                  </Menu.Item>

                  {/* Add more menu items as needed */}
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </nav>
      <nav className="xl:hidden z-30 shadow-slate-300 shadow-md justify-between flex max-h-[64px]  fixed top-[62px]  sm:top-[78px] bg-slate-50 w-full py-2.5 px-2">
        {" "}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className=" rounded-md  font-semibold text-gray-600">
              <div className="border-2 border-gray-400 rounded-lg p-2 font-semibold text-xl text-gray-700 hover:border-gray-600 hover:text-gray-800">
                Book an Appointment
              </div>
            </Menu.Button>
          </div>
          <Menu.Items className="origin-top-left absolute left-0 top-[50px] font-semibold text-lg mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.circlehealthgroup.co.uk/online-booking?consultant=C7079228"
                    className={`${
                      active
                        ? "bg-lime-200 text-gray-900"
                        : "bg-lime-100 text-gray-700"
                    } block px-4 py-2 `}
                  >
                    Appointment with Dr. Mariyam Hassan Malik
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://www.circlehealthgroup.co.uk/online-booking?consultant=C7084146"
                    className={`${
                      active
                        ? "bg-sky-200 text-gray-900"
                        : " bg-sky-100 text-gray-700"
                    } block px-4 py-2 `}
                  >
                    Appointment with Dr. Mohammad Adil Khan
                  </a>
                )}
              </Menu.Item>

              {/* Add more menu items as needed */}
            </div>
          </Menu.Items>
        </Menu>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className=" rounded-md p-2 font-semibold text-gray-600">
              <Image
                src="/assets/icons/bars-solid.svg"
                alt="logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </Menu.Button>
          </div>
          <Menu.Items className="origin-top-right absolute right-0 top-[50px] font-semibold text-lg mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/about"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 `}
                  >
                    About Us
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/services"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 `}
                  >
                    Our Services
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/contact"
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 `}
                  >
                    Contact Us
                  </a>
                )}
              </Menu.Item>
              {/* Add more menu items as needed */}
            </div>
          </Menu.Items>
        </Menu>
      </nav>
    </>
  );
};

export default Nav;
