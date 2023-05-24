import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-[50px]'>
      <div className='w-full h-[800px] bg-[#03001C] absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Registrations</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Register for MATHEMATIKA</h3>
          <h4 className='text-4xl font-bold text-slate-300 py-8'>Event dates: 24th, 25th & 26th February</h4>
          <p className='text-3xl'>
            
          </p>
        </div>

        <div className='grid md:grid-cols-3'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Individual</span>
            <div>
              <p className='md:text-4xl text-3xl font-bold py-4 flex'>RS2700<span className='text-xl text-slate-500 flex flex-col justify-end'>/head</span></p>
            </div>
            <p className='text-xl py-8 text-slate-700'>Register as a Solo Participant. You'll be assigned a team by us. (PKR 2200 - Early Bird)</p>
            <div className='text-2xl'>
                
            <a href="https://forms.gle/Hk4i9Qk7b7LhYqkJA"><button className='w-full py-4 my-4 bg-gradient-to-br from-blue-800 to-red-700'>Register(Individual)</button></a>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Team</span>
            <div>
              <p className='md:text-4xl text-3xl font-bold py-4 flex'>RS2400<span className='text-xl text-slate-500 flex flex-col justify-end'>/head</span></p>
            </div>
            <p className='text-xl py-8 text-slate-700'>Register as a team with your friends. You can make a team of 4 or 5. (PKR 1900 - Early Bird)</p>
            <div className='text-2xl'>
                
            <a href="https://forms.gle/Hk4i9Qk7b7LhYqkJA"><button className='w-full py-4 my-4 bg-gradient-to-br from-blue-800 to-red-700'>Register(Team)</button></a>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>BA</span>
            <div>
              <p className='md:text-4xl text-3xl font-bold py-4 flex'>Brand Ambassador</p>
            </div>
            <p className='text-xl py-8 text-slate-700'> Discount on the registration fee (Check form for more details)</p>
            <div className='text-2xl'>
                
                <a href="https://forms.gle/sYGuZwxXsBeQjRK67"><button className='w-full py-4 my-4 bg-gradient-to-br from-blue-800 to-red-700'>Register(BA)</button></a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Pricing;
