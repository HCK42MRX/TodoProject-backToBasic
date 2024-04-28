import React, { memo } from 'react'
import { cn } from '../utils/cn'

function Button ({ className, onClick }) {
  // console.log('render button') // debugging
  return <button onClick={onClick} className={cn('w-[500px] bg-blue-400 py-2 rounded-md text-white font-medium text-xl tracking-wider', className)}>Submit</button>
}

export default memo(Button)
