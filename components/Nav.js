import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { tw, apply } from 'twind'
import { Menu, Transition } from '@headlessui/react'
import YellowStar from '@/ui/YellowStar'

const Bewertungen = () => (
  <div className="hidden xl:inline-block px-3">
    <a
      href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
      target="_blank"
      className="block mt-1 text-white no-underline md:inline-block md:mt-0"
      rel="noopener noreferrer"
    >
      {/*    <p className="flex justify-center mx-auto flex-no-wrap ">
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
      </p> */}
      <p className="mt-2 text-sm leading-6 text-center text-white no-underline">
        <b>24</b> Bewertungen <b>4,8/5</b> Stand 03/2021
      </p>
    </a>
  </div>
)

const Dropdown = () => {
  const [isDropDownOpen, setDropDownOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-red-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          Preise + Fahrzeuge
          {/* <!-- Heroicon name: solid/chevron-down --> */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
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
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link href="/tesla/model-3srmieten/">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model 3 SR+
              </a>
            </Link>

            <Link href="/tesla/model-3-mieten/">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model 3 Performance
              </a>
            </Link>

            <Link href="/tesla/model-x-mieten/">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Model X
              </a>
            </Link>

            <Link href="/tesla-langzeitmiete/">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                Tesla Langzeitmiete
              </a>
            </Link>
          </div>
        </div>
      </Transition>{' '}
    </div>
  )
}
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <nav className="bg-itana-red">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
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
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src="/images/icon-192.png"
                  alt="Logo mobility.itana.de"
                />
                <img
                  className="hidden lg:block h-8 w-auto mx-2"
                  src="/images/icon-192.png"
                  alt="Logo mobility.itana.de"
                />
                <img
                  className="hidden lg:block h-6 w-auto"
                  src="/images/mobility.itana.de-transparent.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="inline-block align-middle">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-gray-700 hover:text-white" --> */}
                  <Link href="/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tesla mieten
                    </a>
                  </Link>
                  <Dropdown />
                  {/*  <Link href="/tesla/model-3srmieten/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tesla Model 3 SR+
                    </a>
                  </Link>

                  <Link href="/tesla/model-3-mieten/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tesla Model 3 Performance
                    </a>
                  </Link>

                  <Link href="/tesla/model-x-mieten/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tesla Model X
                    </a>
                  </Link>

                  <Link href="/tesla-langzeitmiete/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Tesla Langzeitmiete
                    </a>
                  </Link> */}

                  <Link href="/blog/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Blog
                    </a>
                  </Link>

                  <Link href="/faq/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      FAQ
                    </a>
                  </Link>

                  <Link href="/kontakt/">
                    <a className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-100 hover:bg-gray-700 hover:text-white" --> */}
              <Link href="/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tesla mieten
                </a>
              </Link>

              <Link href="/tesla/model-3srmieten/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tesla Model 3 SR+
                </a>
              </Link>

              <Link href="/tesla/model-3-mieten/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tesla Model 3 Performance
                </a>
              </Link>

              <Link href="/tesla/model-x-mieten/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tesla Model X
                </a>
              </Link>

              <Link href="/tesla-langzeitmiete/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Tesla Langzeitmiete
                </a>
              </Link>

              <Link href="/blog/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Blog
                </a>
              </Link>

              <Link href="/faq/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  FAQ
                </a>
              </Link>

              <Link href="/kontakt/">
                <a className="text-gray-100 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Kontakt
                </a>
              </Link>

              <Bewertungen />
            </div>
          </div>
        </Transition>{' '}
      </nav>
    </div>
  )
}
