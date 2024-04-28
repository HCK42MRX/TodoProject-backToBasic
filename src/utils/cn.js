import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const cn = (...inputs) => {
  const combinedClasses = clsx(...inputs)
  return twMerge(combinedClasses)
}
