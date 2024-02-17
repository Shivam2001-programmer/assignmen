import React from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { FaRegHandshake } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { FaArrowTurnUp } from 'react-icons/fa6';

const Card = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 grid-rows-2 mt-20 gap-3'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200'>
        <div className='px-6 py-4'>
          <div className='font-semibold text-xl mb-2 text-gray-700 w-full inline-flex flex-col text-center justify-center items-center'>
            <FaRegBuilding size={55} />
            Explore AI Opportunities for Your Enterprise
          </div>
          <p className='text-gray-700 text-base'>
            Unlock the potential of generative AI by identifying tailored
            opportunities for integration within your organization, ensuring a
            strategic and efficient approach to AI implementation.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'></div>
      </div>

      <div className='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200'>
        <div className='px-6 py-4'>
          <div className='font-semibold text-xl mb-2 text-gray-700 w-full inline-flex flex-col text-center justify-center items-center'>
            <FaRegHandshake size={55} />
            Design AI Trust Layer
          </div>
          <p className='text-gray-700 text-base'>
            Prioritize data security and build trust in generative AI
            applications with a dedicated trust layer, emphasizing
            privacy-focused solutions that safeguard both organizational and
            customer data
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'></div>
      </div>

      <div className='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200'>
        <div className='px-6 py-4 h-10'>
          <div className='font-semibold text-xl mb-2 text-gray-700 w-full inline-flex flex-col text-center justify-center items-center'>
            <IoMdSettings size={55} />
            Scalability-Focused Solutions
          </div>
          <p className='text-gray-700 text-base'>
            Streamline and optimize business processes with comprehensive
            workflow automation, ensuring seamless integration of AI
            technologies from inception to execution for increased efficiency
            and productivity.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'></div>
      </div>

      <div className='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200  '>
        <div className='px-6 py-4'>
          <div className='font-semibold text-xl mb-2 text-gray-700 w-full inline-flex flex-col text-center justify-center items-center'>
            <FaArrowTurnUp size={55} />
            End to end Workflow automation
          </div>
          <p className='text-gray-700 text-base'>
            Implement cutting-edge, scalable generative AI solutions that not
            only meet current organizational needs but also adapt and grow with
            the evolving demands of your enterprise, providing a future-proof
            approach to AI integration.
          </p>
        </div>
        <div className='px-6 pt-4 pb-2'></div>
      </div>
    </div>
  );
};

export default Card;
