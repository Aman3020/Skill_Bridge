import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <span className='px-2 font-medium py-2 rounded-full bg-gray-100 text-[#F83002]'>No.1 Job Hunt Website</span>
        <div className="flex flex-col gap-5 my-10">
            <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus pariatur omnis quibusdam explicabo?</p>
            <div className='flex w-[40%] shadow-lg border bordergray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input type="text"
                placeholder='Find Your dream jobs'
                className='outline-none border-none w-full'
                 />
                 <Button className='rounded-r-full bg-[#6A38C2]'>
                    <Search className='h-5 w-5'/>
                 </Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
