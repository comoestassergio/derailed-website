import { gsap } from 'gsap'
import { useEffect } from 'react'

export default function HeroMobile () {

   useEffect(() => {
        gsap.timeline()
            .fromTo('#line', {y: '100vh', opacity: 0}, {y: 0, opacity: 1, stagger: 0.5, ease: 'power5'})
            .fromTo('#slogan', {x: '-100%', opacity: 0}, {x: 0, opacity: 1})

   }, [])

    return (
        <div className=' bg-primary w-full h-screen'>
            <div className="flex flex-col pl-3 pt-3">
                <h1 id='line' className='text-[10rem] leading-[100%] text-secondary uppercase'>de</h1>
                <h1 id='line' className='text-[10rem] leading-[100%] text-secondary uppercase'>ra</h1>
                <h1 id='line' className='text-[10rem] leading-[100%] text-secondary uppercase'>il</h1>
                <h1 id='line' className='text-[10rem] leading-[100%] text-secondary uppercase'>ed</h1>
                
            </div>
            <p id='slogan' className="text-white ml-6 mt-6 text-lg opacity-80 font-thin">shape reality around you</p>
        </div>
    )
}