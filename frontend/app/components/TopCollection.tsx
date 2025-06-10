'use client'

import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const TopCollection = () => {
  const router = useRouter()

  // Refs for overlays and images
  const pulseRefs = useRef<(HTMLDivElement | null)[]>([])
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])

  const triggerAnimation = (idx: number) => {
    const overlay = pulseRefs.current[idx]
    const img = imgRefs.current[idx]
    if (!overlay || !img) return

    // Restart blurZoomPulse on overlay
    overlay.classList.remove('animate-blurZoomPulse')
    void overlay.offsetWidth
    overlay.classList.add('animate-blurZoomPulse')

    // Restart pulseOnce on image
    img.classList.remove('animate-pulseOnce')
    void img.offsetWidth
    img.classList.add('animate-pulseOnce')
  }

  return (
    <div className='mt-[11.25rem] w-full mx-auto sm:px-2'>
      <div className='flex flex-col items-center gap-2 sm:gap-5 lg:mx-[8.8rem]'>
        <div className='flex flex-col gap-2 items-center text-center'>
          <h2 className='text-4xl'>Our Top Collections</h2>
          <p className='text-sm pt-[0.625rem]'>
            Explore the unique world of jewelry where <br /> sophistication is the watchword of our lalacuculala.
          </p>
        </div>

        <div className='flex justify-between pt-[3.125rem] gap-8 w-full'>
          {/* Female category */}
          <div
            className='relative w-[50%] h-[20rem] sm:h-[26rem] overflow-hidden cursor-pointer'
            onMouseEnter={() => triggerAnimation(0)}
            onClick={() => router.push('/collection/women')}
          >
            <img
              ref={(el) => {imgRefs.current[0] = el;}}
              src='femalecollection.jpg'
              alt='Female collection'
              className='w-full h-full object-cover'
            />
            {/* Overlay for blurZoomPulse */}
            <div
              ref={(el) => {pulseRefs.current[0] = el;}}
              className='absolute inset-0 pointer-events-none bg-cover bg-center opacity-0 z-10'
              style={{ backgroundImage: `url(femalecollection.jpg)` }}
            />

            {/* Text content */}
            <div className='absolute inset-0 flex flex-col gap-6 items-center justify-center text-white text-2xl'>
              <p>Female categories</p>
              <div className='text-white flex items-center gap-2'>
                <p className='text-sm'>Shop categories</p>
                <svg
                  className='h-4 aspect-square'
                  fill='white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z' />
                </svg>
              </div>
            </div>
          </div>

          {/* Male category */}
          <div
            className='relative w-[50%] h-[20rem] sm:h-[26rem] overflow-hidden cursor-pointer'
            onMouseEnter={() => triggerAnimation(1)}
            onClick={() => router.push('/collection/men')}
          >
            <img
              ref={(el) => {imgRefs.current[1] = el;}}
              src='malecollection.jpg'
              alt='Male collection'
              className='w-full h-full object-cover'
            />
            {/* Overlay for blurZoomPulse */}
            <div
              ref={(el) => {pulseRefs.current[1] = el;}}
              className='absolute inset-0 pointer-events-none bg-cover bg-center opacity-0 z-10'
              style={{ backgroundImage: `url(malecollection.jpg)` }}
            />

            {/* Text content */}
            <div className='absolute inset-0 flex flex-col gap-6 items-center justify-center text-white text-2xl'>
              <p>Male categories</p>
              <div className='text-white flex items-center gap-2'>
                <p className='text-sm'>Shop categories</p>
                <svg
                  className='h-4 aspect-square'
                  fill='white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 448 512'
                >
                  <path d='M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCollection
