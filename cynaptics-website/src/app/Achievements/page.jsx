'use client'
import React from 'react'
import {AD} from './AD'
import ACard from '@/components/ACard'
export default function page() {
  return (
    <div className=''>
      <h1 className='text-center my-20 font-bold lg:text-5xl text-3xl'>Achievements By The Club Members</h1>
      <div className='md:grid-cols-2 grid lg:grid-cols-3'>
      {AD.map((ele,index)=>{
        return (
          <div key={ele.id} className="mx-10 md:mx-auto">
          <ACard ele={ele} />
          </div>
        )
      })}
      </div>
    </div>
  )
}
