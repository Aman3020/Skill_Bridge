import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>

            <h1 className='font-medium text-lg'>Comapny Name</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className="text-blue-700 font-bold" variant="ghost">12 Positions</Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">Part Time</Badge>
            <Badge className="text-[#7209B7] font-bold" variant="ghost">24 LPA</Badge>
        </div>
    </div>
  )
}

export default LatestJobCards