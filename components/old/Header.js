import React, { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import YellowStar from '@/ui/YellowStar'
import { tw, apply } from 'twind'
import 'twind/shim'
const HeaderItem = apply`block pr-1 mt-2 mr-1 text-sm font-semibold text-white no-underline hover:text-gray-300 md:inline-block md:mt-0`

const Bewertungen = () => (
  <div className=''>
    <a
      href='https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de'
      target='_blank'
      className='block mt-1 text-white no-underline md:inline-block md:mt-0'
      rel='noopener noreferrer'
    >
      <p className='flex justify-center mx-auto flex-no-wrap '>
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
        <YellowStar />
      </p>
      <p className='mt-2 text-sm leading-6 text-center text-white no-underline'>
        24 Bewertungen 4,8/5 Stand 03/2021
      </p>
    </a>
  </div>
)

function DropDownMenu () {
  const DropDownLinks = [
    {
      id: 3,
      href: '/tesla/model-3srmieten/',
      name: 'Tesla Model 3 SR+'
    },
    {
      id: 2,
      href: '/tesla/model-3-mieten/',
      name: 'Tesla Model 3 Performance'
    },

    { id: 1, href: '/tesla/model-x-mieten/', name: 'Tesla Model X' },
    {
      id: 4,
      href: '/tesla-langzeitmiete/',
      name: 'Tesla Langzeitmiete'
    }
  ]

  const [ShowDropDown, setShowDropDown] = useState(false)
  return (
    <div className='inline-block relative mt-2 mr-2 text-left text-white no-underline md:mt-0'>
      <div>
        <button
          onClick={() => setShowDropDown(!ShowDropDown)}
          type='button'
          className='inline-flex w-full text-sm font-semibold leading-5 text-white md:justify-start hover:text-gray-300 sm:text-left'
        >
          Preis + Fahrzeuge
          <svg
            className='ml-0 -mr-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='md:hidden'>
        <div className=''>
          {DropDownLinks &&
            DropDownLinks.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className='block py-2 pl-4 text-sm leading-5 text-black focus:outline-none'
              >
                <a>{item.name}</a>
              </Link>
            ))}
        </div>
      </div>
      <div
        className={`${
          ShowDropDown ? 'absolute' : 'hidden'
        } origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg z-50`}
      >
        <div className='hidden bg-white rounded-md shadow-xs md:block'>
          <div className='py-1 w-auto'>
            {DropDownLinks &&
              DropDownLinks.map(item => (
                <Link
                  key={item.id}
                  href={item.href}
                  className='block py-2 pl-4 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                >
                  <a>{item.name}</a>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Header () {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div
      aria-label='navigation'
      role='navigation'
      id='navigation'
      className='bg-itana-red max-w-screen'
    >
      <div className='mx-auto max-w-7xl align-baseline'>
        <div className='flex flex-wrap justify-between p-4 lg:flex-no-wrap md:p-2'>
          <Link href='/' className='flex items-center text-white no-underline '>
            <div className='flex items-center mx-auto space-x-5'>
              <Image
                src='/images/icon-192.png'
                alt='Logo mobility.itana.de'
                className='mx-1'
                height='64'
                width='64'
                layout='intrinsic'
              />
              <img
                src='/images/mobility.itana.de-transparent.svg'
                alt='Icon'
                layout='fill'
                className='mr-2 w-36 md:w-48 xl:w-64'
              />
            </div>
          </Link>

          <button
            data-cy='MobileMenuButton'
            className='flex items-center py-3 px-4 w-full text-white rounded border border-white md:hidden xs:mt-2'
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className='w-3 h-3 fill-current'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>

          <div
            className={`${
              isExpanded ? 'block' : 'hidden'
            } md:flex md:flex-auto md:items-center w-full md:w-auto md:justify-between`}
          >
            <a
              className={tw`block ml-1 -mr-1 text-white ${HeaderItem}`}
              href='tel:+4971149066450'
            >
              <span className='inline-block w-6 h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </span>
              +49 711 49066 450
            </a>

            <Link href='/' className={tw`text-white ${HeaderItem}`}>
              <a>Tesla mieten</a>
            </Link>

            <DropDownMenu />

            <Link href='/blog/' className={tw`text-white ${HeaderItem}`}>
              <a>Blog</a>
            </Link>

            <Link href='/faq/' className={tw`text-white ${HeaderItem}`}>
              <a>FAQ</a>
            </Link>

            <Link href='/kontakt/' className={tw`text-white ${HeaderItem}`}>
              <a>Kontakt</a>
            </Link>
            <Bewertungen />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
