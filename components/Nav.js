import React, { useState } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";

const Bewertungen = () => (
  <div className="hidden px-3 xl:inline-block">
    <a
      href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
      target="_blank"
      className="mt-1 block text-white no-underline md:mt-0 md:inline-block"
      rel="noopener noreferrer"
    >
      {/*    <p className="flex justify-center mx-auto flex-no-wrap">
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
      </p> */}
      <p className="mt-2 text-center text-sm leading-6 text-white no-underline">
        <b>32</b> Bewertungen <b>4,9/5</b> Stand 01/2022
      </p>
    </a>
  </div>
);

const Dropdown = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          Preise + Fahrzeuge
          {/* <!-- Heroicon name: solid/chevron-down --> */}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      <Transition
        show={isDropDownOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link passHref href="/tesla/model-3srmieten/">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model 3 SR+
              </a>
            </Link>

            <Link passHref href="/tesla/model-3-long-range-mieten/">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model 3 Long Range
              </a>
            </Link>

            <Link passHref href="/tesla/model-3-mieten/">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model 3 Performance
              </a>
            </Link>

            <Link passHref href="/tesla/model-x-mieten/">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model X
              </a>
            </Link>

            <Link passHref href="/tesla-langzeitmiete/">
              <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Langzeitmiete
              </a>
            </Link>
          </div>
        </div>
      </Transition>{" "}
    </div>
  );
};

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <nav className="bg-itana-red">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                data-cy="MobileMenuButton"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Icon when menu is closed. --> */}
                {/* <!--
            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. --> */}
                {/* <!--
            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link passHref href="/">
                  <a className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-10 w-auto lg:hidden"
                      src="/images/icon-192.png"
                      alt="Logo mobility.itana.de"
                    />
                    <img
                      className="mx-2 hidden h-8 w-auto lg:block"
                      src="/images/icon-192.png"
                      alt="Logo mobility.itana.de"
                    />
                    <img
                      className="hidden h-6 w-auto lg:block"
                      src="/images/mobility.itana.de-transparent.svg"
                      alt="Workflow"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="inline-block align-middle">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-gray-700 hover:text-white" --> */}

                  <a
                    href="https://itana.rentware.io/"
                    className="rounded-md py-2 px-3 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
                  >
                    Tesla mieten
                  </a>

                  <Dropdown />
                  {/*  <Link passHref href="/tesla/model-3srmieten/">
                    <a className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md hover:text-white hover:bg-gray-700">
                      Tesla Model 3 SR+
                    </a>
                  </Link>

                  <Link passHref href="/tesla/model-3-mieten/">
                    <a className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md hover:text-white hover:bg-gray-700">
                      Tesla Model 3 Performance
                    </a>
                  </Link>

                  <Link passHref href="/tesla/model-x-mieten/">
                    <a className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md hover:text-white hover:bg-gray-700">
                      Tesla Model X
                    </a>
                  </Link>

                  <Link passHref href="/tesla-langzeitmiete/">
                    <a className="py-2 px-3 text-sm font-medium text-gray-100 rounded-md hover:text-white hover:bg-gray-700">
                      Tesla Langzeitmiete
                    </a>
                  </Link> */}

                  <Link passHref href="/blog/">
                    <a className="rounded-md py-2 px-3 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                      Blog
                    </a>
                  </Link>

                  <Link passHref href="/faq/">
                    <a className="rounded-md py-2 px-3 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                      FAQ
                    </a>
                  </Link>

                  <Link passHref href="/kontakt/">
                    <a className="rounded-md py-2 px-3 text-sm font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                      Kontakt
                    </a>
                  </Link>

                  <Bewertungen />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Transition
          show={isMenuOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0 "
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
        >
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div
            className="sm:hidden"
            id="mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-gray-700 hover:text-white" --> */}

              <a
                href="https://itana.rentware.io/"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
              >
                Tesla mieten
              </a>

              <Link passHref href="/tesla/model-3srmieten/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Tesla Model 3 SR+
                </a>
              </Link>

              <Link passHref href="/tesla/model-3-long-range-mieten/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Tesla Model 3 Long Range
                </a>
              </Link>

              <Link passHref href="/tesla/model-3-mieten/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Tesla Model 3 Performance
                </a>
              </Link>

              <Link passHref href="/tesla/model-x-mieten/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Tesla Model X
                </a>
              </Link>

              <Link passHref href="/tesla-langzeitmiete/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Tesla Langzeitmiete
                </a>
              </Link>

              <Link passHref href="/blog/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Blog
                </a>
              </Link>

              <Link passHref href="/faq/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  FAQ
                </a>
              </Link>

              <Link passHref href="/kontakt/">
                <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white">
                  Kontakt
                </a>
              </Link>

              <a
                href="tel:+4971149066450"
                className="block rounded-md py-2 px-3 text-base font-medium text-gray-100 hover:bg-gray-700 hover:text-white"
              >
                +49 711 49 06 64 50
              </a>

              <Bewertungen />
            </div>
          </div>
        </Transition>{" "}
      </nav>
    </div>
  );
}
