import React, { memo } from 'react'
import { cn } from '../utils/cn'

function InputField ({ name, className, onChange, value, placeholder, maxLetter }) {
  // console.log('render title') // debugging
  const isLimit = value.length > maxLetter ? 'over-limit' : 'under-limit'
  return (
    <div className='relative'>
      <input type="text" name={name} onChange={onChange} value={value} placeholder={placeholder} className={cn('input-field', className)} />
      <p className={isLimit}>{value.length} / {maxLetter || 5}</p>
    </div>
  )
}

export default memo(InputField)
