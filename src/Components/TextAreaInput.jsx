import React, { memo } from 'react'
import { cn } from '../utils/cn'

function TextAreaInput ({ name, className, onChange, value, placeholder, maxLetter }) {
  // console.log('textareainput dirender') // debugging
  const isLimit = value.length > maxLetter ? 'over-limit' : 'under-limit'
  return (
    <div className='relative'>
      <textarea name={name} onChange={onChange} value={value} placeholder={placeholder} className={cn('input-field', className)} />
    <p className={isLimit}>{value.length} / {maxLetter || 200}</p>
    </div>
  )
}

export default memo(TextAreaInput)
