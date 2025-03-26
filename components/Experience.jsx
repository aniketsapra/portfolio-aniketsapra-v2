import React from 'react'
import { experience } from '../public/data/Data'
import Expcard from './Expcard'

function Experience() {
  return (
      <div className="grid lg:gap-6 mb-10 lg:mb-30">
      <div className='sticky top-0 z-20 -mx-6 w-screen bg-gray-200/30 dark:bg-emerald-950/10
        px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h1 className='text-sm font-bold uppercase tracking-widest text-gray-800 dark:text-slate-200 lg:sr-only'>Experience</h1>
      </div>
      {experience.map((exp) => (
        <Expcard key={exp.id} experience={exp} />
      ))}
    </div>
  )
}

export default Experience
