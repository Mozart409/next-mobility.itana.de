import YellowStar from '@/ui/YellowStar'
export default function GoogleBewertungen () {
  return (
    <div className='sm:pb-16'>
      <div className='relative'>
        <div className='absolute inset-0 h-1/2' />
        <div className='relative px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de'
            >
              <div className='text-center '>
                <p className='flex justify-center mx-auto flex-no-wrap '>
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                  <YellowStar />
                </p>
                <p className='mt-2 font-medium leading-6 text-center text-gray-500 text-'>
                  17 Bewertungen 5/5 Stand 09/2020
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
