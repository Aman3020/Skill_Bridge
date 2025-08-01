import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType:"Location",
    array:["Delhi", "Banglore"]
  },
  {
    filterType:"Industry",
    array:["flipkart", "Google"]
  },
  {
    filterType:"Salary",
    array:["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full rounded-md bg-white p-3'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index)=>(
            <div>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, idx) =>{
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                      <Label >{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
