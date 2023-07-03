import React from 'react'
import Finder from '../components/Finder'
import { jobs } from '../utils/jobs'



const Career = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6]'>
          <h1 className="text-center justify-start items-center  text-5xl font-serif font-bold">Jobs</h1>
    <div className="flex space-x-6 justify-center ">

    {
      jobs.map((jobs) => 
      <Finder jobs={jobs} key={jobs.id}/>
      )
    }
    </div>
    </div>
    </>
  )
}

export default Career
