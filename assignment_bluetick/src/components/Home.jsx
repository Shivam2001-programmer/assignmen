import React from 'react';

const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row mt-24 justify-between'>
        <div className='md:w-1/2'>
          <h1 className='ml-6 md:ml-12 font-bold text-4xl md:text-5xl '>
            TRANSFORMING ENTERPRISES
          </h1>
          <p className='ml-6 md:ml-12 font-semibold text-lg md:text-2xl text-gray-500'>
            with cutting-edge, scalable, privacy-focused Generative AI Solutions
          </p>
          <p className='mt-6 md:mt-10 ml-6 md:ml-12 font-semibold text-lg md:text-2xl '>
            Founded in 2017, Bluetick Consultants is a technology-driven firm
            that has made a significant impact in the Indian and US startup
            ecosystems.
          </p>
        </div>
        <div className='flex justify-center mt-6 md:mt-0 md:w-1/2'>
          <img
            className='w-full md:max-w-lg'
            src='https://assets.entrepreneur.com/content/3x2/2000/1656401594-Myproject352.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380'
            alt=''
          />
        </div>
      </div>

      <div className='w-full flex justify-center md:justify-start'>
        <button className='p-4 md:p-5 bg-blue-900 text-white rounded-lg md:ml-12 text-lg md:text-xl mt-20'>
          Find Your Consultant
        </button>
      </div>
    </>
  );
};

export default Home;
