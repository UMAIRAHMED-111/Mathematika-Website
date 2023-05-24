import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'
import Logo from '../assets/Logo.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-[580px] text-white flex items-center pt-[80px]'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>
        <div className='w-full mx-auto text-white relative'>
        <div className='max-w-[750px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <img className='w-[450px] md:w-[800px] mx-auto' src={Logo} alt='/' />
        <p className='md:text-xl text-small font-bold py-10 px-3 text-gray-300'>Mathematika is pioneered to provide a forum for the discussion of creative and innovative ideas in the field of Mathematics. The primary agenda for all the activities of the Club is the promotion of Mathematics on an institutional, local and national level.</p>
        <a href="https://forms.gle/Hk4i9Qk7b7LhYqkJA"><button className='px-8 py-4 my-4 bg-gradient-to-br from-blue-800 to-red-700 text-xl'>Register(Team)</button></a>
        </div>
        </div>
    </div>
  )
}

export default Hero