import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
   <>
    <div className='mt-4 my-3 p-3 '>
    <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-500 ease-in-out  dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={item.image}
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline dark:text-white  hover:bg-pink-500 hover:text-white hover:cursor-pointer">${item.price}</div>
      <div className="badge badge-outline  px-3 py-2  dark:text-white hover:bg-pink-500 hover:text-white hover:cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
      </div>
   </>
  )
}

export default Cards
