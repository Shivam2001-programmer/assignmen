import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
      <div className='font-bold text-3xl text-center mt-20'>
        Explore and enjoy the blogs written by our passionate techies.
      </div>

      <div
        // className="flex mt-12 gap-4 place-content-around"
        className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 grid-rows-2 mt-20 gap-3'
      >
        <div class='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200 '>
          <img src='' alt='' />
          <div class='px-6 py-4'>
            <div class='font-semibold text-xl mb-2 text-gray-700'>
              Speaking SQL: Turning Natural Language into Database Dialogues
            </div>
            <p class='text-gray-700 text-base'>
              Bridging Language and Data in the Enterprise Sphere: In the realm
              of enterprise data management, SQL databases have long stood as
              the backbone, housing vast quantities of invaluable information.
              As enterprises increasingly lean on business intelligence (BI)
              tools to extract insights from these data repositories, the quest
              for more intuitive and accessible querying methods gains momentum.
              The emerging solution? Leveraging Large Language Models (LLMs) to
              interact with SQL databases using natural language.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'></div>
        </div>
        <div class='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200 h-auto'>
          <img src='' alt='' />
          <div class='px-6 py-4'>
            <div class='font-semibold text-xl mb-2 text-gray-700'>
              Beyond Basics: Elevating AI with Reinforcement Learning from Human
              Feedback
            </div>
            <p class='text-gray-700 text-base'>
              Reinforcement Learning from Human Feedback (RLHF) was arguably the
              key behind the success of ChatGPT, marking a significant
              advancement in AI's ability to understand and engage in human
              language. This method, vital for fine-tuning language models,
              addresses the complexities and nuances of communication, ensuring
              AI interactions are natural and intuitive. It navigates the
              challenges of training AI with diverse internet data, carefully
              guiding models to avoid replicating inappropriate language or
              tones.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <a
              href='https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html'
              target="_blank"
              className='text-blue-500' rel="noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
        <div class='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200'>
          <img src='' alt='' />
          <div class='px-6 py-4 h-10'>
            <div class='font-semibold text-xl mb-2 text-gray-700'>
              The Fine Art of Tuning: Parameter-Efficient Fine-Tuning
            </div>
            <p class='text-gray-700 text-base'>
              Welcome to our exploration of the fascinating world of large
              language models! As many of you are aware, the scale of these
              models has skyrocketed recently. Take, for instance, GPT-4, which
              boasts a staggering 1.8 trillion parameters. The desire to
              fine-tune these behemoths with custom datasets is growing, yet it
              poses significant challenges. Fine-tuning requires adjusting
              countless parameters, which is time-consuming, and the GPU demands
              are nothing short of immense.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'></div>
        </div>
        <div class='max-w-sm rounded overflow-hidden shadow-lg shadow-sky-200 '>
          <img src='' alt='' />
          <div class='px-6 py-4'>
            <div class='font-semibold text-xl mb-2 text-gray-700'>
              PrivAIcy Matters: Balancing Privacy, Price, and Performance
            </div>
            <p class='text-gray-700 text-base'>
              Welcome to the enthralling universe of Generative AI! Recognized
              as a realm of artificial intelligence algorithms with the magic to
              conjure fresh content based on available data, this technology has
              unassumingly become the new frontier for a plethora of industries,
              including tech, banking, and media. And, no surprises here, the
              technological world has openly embraced it in myriad innovative
              ways.
            </p>
          </div>
          <div class='px-6 pt-4 pb-2'></div>
        </div>
      </div>
      {/* <div className="flex mt-8 gap-4 ml-12  ">
      </div> */}
    </>
  );
};

export default Blog;
