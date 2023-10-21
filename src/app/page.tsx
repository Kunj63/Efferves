
import { ArrowRight } from 'lucide-react'
import Maxwidthwrapper from './components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <Maxwidthwrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
          <p className='text-sm font-semibold text-gray-700'>
            Efferves is crazy
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
          Where <span className='text-rose-800'>Documents</span> Do the Chatting
        </h1>
        <p className='mt-5 max-w-prose font-bold text-zinc-700 sm:text-lg'>
        Efferves transforms Your PDFs into Dynamic <span className='text-rose-800'>Conversations.</span> Simply upload your files and start chatting.
        </p>

        <Link
          className={buttonVariants({
            size: 'lg',
            className: 'mt-5',
          })}
          href='/dashboard'
          target='_blank'>
          Get started{' '}
          <ArrowRight className='ml-2 h-5 w-5' />
        </Link>
    </Maxwidthwrapper>
  )
}
