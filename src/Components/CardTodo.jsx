import React from 'react'

export default function CardTodo ({ title, description }) {
  return (
    <div className='Container-card bg-yellow-400 flex flex-col gap-y-2 text-black w-64 px-4 py-2'>
      <h3 className='title-card text-xl'>
        {title}
      </h3>
      <hr/>
      <p className='paragraph text-slate-900 text-base'>{description}</p>
    </div>
  )
}
