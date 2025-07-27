import React from 'react'
import { RadioGroup } from './ui/radio-group'

const filterData = [
  {
    filterType:"Location",
    array:["Delhi", "Banglore"]
  },
  {
    filterType:"Industry",
    array:["Delhi", "Banglore"]
  },
  {
    filterType:"Salary",
    array:["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  return (
    <div>
      <h1>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index)=>(
            <dvi>
              <h1>{data.filterType}</h1>
            </dvi>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
