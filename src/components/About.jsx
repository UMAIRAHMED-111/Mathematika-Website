import React from 'react'
import pic1 from '../assets/Picture1.jpg';
import pic2 from '../assets/Picture2.jpg';
import pic3 from '../assets/Picture3.jpg';

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>IBA Mathematics & Astronomy Club</h2>
                <p className='text-md py-6 px-2 text-gray-800'>Since the beginning of time, humanity has been fascinated by the cosmos. Planets, moons, comets, stars, and galaxies have captured the imaginations and hearts of scientists, philosophers, and millions of people worldwide.
Many have been captivated by the universe1s vast size and energy. Mathematics illuminates the beautiful and astonishing hidden structures of the universe, through which astronomical mysteries can be unraveled. It is also the altar on which the world of science operates, through which technologies function, and from which social sciences can be modeled with which the humanities and fine arts interact. In this spirit, IBA Math and Astronomy Club envisions to share wonder about, and appreciation for, the fields of mathematics and astronomy through educational trips, enlightening seminars, and challengingly fun competitions such as our flagship event, Mathematika.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                
                <img className='w-[300px] h-[150px] mx-auto border py-1 rounded-xl shadow-md my-2' src={pic1} alt='/' />
    
                <img className='w-[300px] h-[150px] mx-auto border py-1 rounded-xl shadow-md my-2' src={pic2} alt='/' />
                {/* border py-8 rounded-xl shadow-xl */}
                
                <img className='w-[300px] h-[150px] mx-auto border py-1 rounded-xl shadow-md my-2' src={pic3} alt='/' />
                
            </div>
        </div>
    </div>
  )
}

export default About