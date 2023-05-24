import React, {useState} from 'react';
import { Link, animateScroll as scroll, } from 'react-scroll'
import LOGO1 from '../assets/LOGO1.png';


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div className='w-screen h-[80px] bg-[#03001C] z-10 text-white fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex justify-between items-center'>
          <img className='w-[110px] mx-auto' src={LOGO1} alt='/' />
          <ul className='hidden md:flex'>
          <li className='cursor-pointer'><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='cursor-pointer'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='cursor-pointer'><Link to="modules" smooth={true} offset={-50} duration={500}>Modules</Link></li>
          <li className='cursor-pointer'><Link to="pricing" smooth={true} offset={-100} duration={500}>Registrations</Link></li>
          <li className='cursor-pointer'><Link to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>
          </ul>
        </div>
        
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-[#03001C] text-white w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="modules" smooth={true} offset={-50} duration={500}>Modules</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="pricing" smooth={true} offset={-100} duration={500}>Registrations</Link></li>
          <li className=' w-full'><Link onClick={handleClose} to="contact" smooth={true} offset={-50} duration={500}>Contact</Link></li>

        
      </ul>
    </div>
  );
};

export default Navbar;
