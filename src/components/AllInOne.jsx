import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import Build from '../assets/Build.PNG'
import Crack from '../assets/Crack.PNG'
import Equation from '../assets/Equation.PNG'
import Jeopardy from '../assets/Jeopardy.PNG'
import Murder from '../assets/Murder.PNG'

const AllInOne = () => {
  return (
    <div name='modules' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>MODULES</h2>
        <p className='text-2xl py-8 text-gray-800 text-center'>
          Modules in Mathematika are where the real fun of the event lies. You get to select from a wide list of modules.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={Equation} className='w-40 bg-indigo-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>The Grand Equation</h3>
                      <p className='text-gray-600 text-md'>This module will comprise two rounds.In the first round, the participants would likely be presented with a graph and would be expected to use their knowledge of algebra and other mathematical concepts to analyze the graph, identify any key features, and determine the equation that best represents the data. In the second round, the participants would likely be presented with a set of questions related to various mathematical concepts and methods. These questions would be designed to test the participants' knowledge and understanding of the subject matter and might be taken from different areas of mathematics such as Algebra, Calculus, Geometry, Number theory etc..</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={Build} className='w-40 bg-indigo-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Build it Up</h3>
                      <p className='text-gray-600 text-mc'>This module aims at designing and creating simple easy to build artifacts using engineering and physics concepts. Participants will be expected to let out the creative Gutenberg mind that resides in them to build up in a limited amount of time using even limited resources. The structures and designs that participants come up with, will be compared to one another and allotted points accordingly. So when the clock starts ticking, BUILD IT UP !!!</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={Crack} className='w-40 bg-indigo-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Crack & Hunt</h3>
                      <p className='text-gray-600 text-md'>The Crack & Hunt segment is curated to incorporate an overarching complexity of figuring out clues by digging through challenging math problems. The participants will be tasked with figuring out solutions to prompts of different difficulty level math problems and the solution to that will lead them to the next clue. The hunt will cover all major areas of the IBA city campus and will be an incredibly fun activity for all the participants who wish to explore IBA and also want to put their math skills to the test.</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={Murder} className='w-40 bg-indigo-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Murder Mystery</h3>
                      <p className='text-gray-600 text-md'>Crack the code and solve the murder mystery! This classic investigation will take your deductive and analytical skills to the next level. You’ll be left scrambling for the next clue as you unravel this thrilling mystery. 
Are you smart enough to solve a puzzling case that left the police baffled? A reunion party takes a drastic turn when the host, Dr Yves Meyer, is found dead in his own house. Bring out the tools and gather one’s wits! You are hired as a private investigator!  Register now to unleash your inner Sherlock Holmes.
</p>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                  <img src={Jeopardy} className='w-[100px] bg-indigo-400 text-white rounded-lg mt-[-4rem]'></img>

                      <h3 className='font-bold text-2xl my-6'>Jeopardy</h3>
                      <p className='text-gray-600 text-md'>Teams will select one topic (out of 5)
and a difficulty level (Easy, Medium or Hard).
Based on their choice, they will be given a question.
If they correctly solve the question,
they will be rewarded with an artificial currency

Rewards Criteria:
100 bucks for easy level
300 bucks for medium level
500 bucks for hard level.</p>
                  </div>
              </div>
          </div>

        </div>
      </div>
  );
};

export default AllInOne;
