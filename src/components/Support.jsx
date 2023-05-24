import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
  <div name='support' className='w-full mt-24'>
      <div className='w-full h-[500px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='md:text-3xl text-2xl pt-8 text-slate-300 uppercase text-center'>ABOUT</h2>
              <h3 className='md:text-5xl text-4xl font-bold py-6 text-center'>MATHEMATIKA</h3>
              <p className='py-4 md:text-2xl text-md text-slate-300'>Mathematika is a 3-day competition which aims to provide the students and enthusiast of Math an opportunity to compete in different areas of Math and provide them with informative seminars and workshops. It will be providing skilled students with a platform for showcasing and improving their talents in this field.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                 
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
