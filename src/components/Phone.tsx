import { cn } from '@/lib/utils'
import Image from 'next/image'
import { HtmlHTMLAttributes } from 'react'

interface PhoneProps extends HtmlHTMLAttributes<HTMLDivElement> {
  dark?: boolean
  imgSrc: string
}

export const Phone = ({ className, dark = false, imgSrc, ...props }: PhoneProps) => {
  return (
    <div className={cn('relative pointer-events-none z-50 overflow-hidden', className)} {...props}>
      <Image
        src={dark ? '/phone-template-dark-edges.png' : '/phone-template-white-edges.png'}
        alt='phone image'
        width={300}
        height={300}
        className='pointer-events-none z-50 select-none'
      />
      <div className='absolute -z-10 inset-0'>
        <Image
          width={400}
          height={400}
          className='object-cover'
          src={imgSrc}
          alt='overlaying phone image'
        />
      </div>
    </div>
  )
}
