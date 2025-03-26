import React from 'react';

function About() {
  return (
    <div>
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-gray-200/30 dark:bg-emerald-950/10
        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h1 className='text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-slate-200 lg:sr-only'>
          About
        </h1>
      </div>

      <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 mb-10 lg:mb-30'>
        Hi, I’m a Full-Stack Developer passionate about crafting accessible, pixel-perfect user interfaces and building robust, scalable backend systems. I love working at the intersection of design and development, ensuring that every experience I create is not only visually appealing but also optimized for performance and usability.
        <br className='mb-5' />

        Currently, I’m looking for a new role where I can leverage my skills in 
        <span className='text-gray-900 dark:text-gray-200'> JavaScript, React, Next.js, Node.js, and MongoDB </span>
        to build impactful applications.
        <br className='mb-5' />

        Previously, I worked at 
        <span className='text-gray-900 dark:text-gray-200'> Deloitte </span>, developing 
        <span className='text-gray-900 dark:text-gray-200'> SAP ABAP </span> solutions to meet business requirements. 
        I’ve also freelanced as a 
        <span className='text-gray-900 dark:text-gray-200'> Next.js Frontend Developer </span>, 
        helping businesses create dynamic and efficient web applications.
        <br className='mb-5' />

        When I’m not coding, you’ll usually find me jogging, reading, spending time with my two cats, or playing video games.
        <br className='mb-5' />

        Let’s connect and build something awesome!
      </p>
    </div>
  );
}

export default About;
