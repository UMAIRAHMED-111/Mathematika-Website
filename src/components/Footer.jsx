import React from 'react'

import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div name="contact" className='w-full pt-[100px] text-[#1e212b]-300 py-y px-2 bg-[#03001C] text-white flex flex-col justify-center'>
        
        <div>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 border-t-2 border-b-2 border-gray-600 py-8'>
        
            <div className='flex flex-col justify-between items-center text-center'>
                <h1 className='font-bold uppercase pt-2 text-red-400 text-2xl font-bold'>CONTACT US</h1>
                <h1 className='font-bold uppercase pt-2 text-black-600 text-2xl font-bold'>Hamza Ali Shah</h1>
                <h2 className='uppercase pt-2 text-black-600 text-xl'>03481000100</h2>
                <h1 className='font-bold uppercase pt-2 text-black-600 text-2xl font-bold'>Mahmood Riaz Azeemi</h1>
                <h2 className='uppercase pt-2 text-black-600 text-xl'>03321304824</h2>
            </div>
            <div className='flex flex-col justify-start items-center text-center'>
                <h1 className='font-bold uppercase pt-2 text-red-400 text-2xl font-bold'>Registeration Deadlines</h1>
                <div>
                <p className='uppercase pt-2 text-black-600 text-xl'> Early Bird         : 13th February</p>
                <p className='uppercase pt-2 text-black-600 text-xl'>Regular             : TBD</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-bold uppercase pt-2 text-red-400 text-2xl font-bold'>Quick Links</h1>
                <ul>
                <li className=' border-zinc-300 w-full'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className=' border-zinc-300 w-full'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className=' border-zinc-300 w-full'><Link to="modules" smooth={true} offset={-50} duration={500}>Modules</Link></li>
                <li className=' border-zinc-300 w-full'><Link to="pricing" smooth={true} offset={-100} duration={500}>Registrations</Link></li>
                </ul>
                <div className='grid grid-cols-2 p-4 gap-3'>
            <a href='https://web.facebook.com/IBA.Mathematika/?_rdc=1&_rdr'><FaFacebook size={30} className='cursor-pointer'/></a>
            <a href='https://www.instagram.com/mathematika7/'><FaInstagram size={30} className='cursor-pointer'/></a>
        </div>
            </div>
            </div>
        </div>

        <div className='flex flex-row max-w-[1240px] px-2 py-4 mx-auto justify-between text-center text-gray-500'>
        <p className='py-4 px-7'>Mathematika © 2023</p>
        </div>
    </div>
  )
}

export default Footer