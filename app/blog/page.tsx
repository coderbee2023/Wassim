import React from 'react'
import Blog from './ui/Blog'
import { blogdata } from './lib/data'
export default function page() {
  return (
    <div className='flex flex-col'>
      <div className='text-center m-5 text-4xl font-bold'>Blogs</div>
      <div className='grid grid-cols-4 gap-5 p-7'>
        {blogdata.map((item)=>(
          <Blog key={item.id} id={item.id} disc={item.disc} name={item.name} smalldisc={item.smalldisc} imgUrl={item.imgUrl} />
        ))}
      </div>
    </div>
  )
}
