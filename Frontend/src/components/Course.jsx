import React from 'react'
import Cards from './Cards'
import List from '../list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white '>
     <div className='pt-28 items-center justify-center text-center'>
     <h1 className='text-2xl md:text-4xl '>
      We are delighted to have you <span className='text-pink-500'>Here! :)</span>
      </h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequuntur blanditiis dolorum doloremque eaque necessitatibus dicta ullam sit, voluptates quis nesciunt incidunt nostrum distinctio error obcaecati? Quas id aliquid tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ut.</p>
      <Link to={'/'}>
      <button className='bg-pink-500 text-white mt-6 hover:bg-pink-600 duration-300  px-4 py-2 rounded-md'>Back</button>
      </Link>
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      {List.map((item)=>(

<Cards key={item.id} item={item}/>
      )
      )
      }
     </div>
    </div>
    
    </>
  )
}

export default Course
