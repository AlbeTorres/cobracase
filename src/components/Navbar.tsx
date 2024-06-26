import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'

export const Navbar = () => {
  const isAdmin = false
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href={'/'} className='flex z-40 font-semibold'>
            case <span className='text-green-600'>cobra</span>
          </Link>
          <div className='h-full flex items-center space-x-4'>
            <SignedIn>
              <SignOutButton>
                <button
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Sing out
                </button>
              </SignOutButton>
              {isAdmin && (
                <Link
                  href={'/api/auth/logout'}
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Dashboard ✨
                </Link>
              )}
              <Link
                href={'/configure/upload'}
                className={buttonVariants({
                  size: 'sm',
                  className: 'hidden sm:flex items-center gap-1',
                })}
              >
                Create case
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </SignedIn>

            <SignedOut>
              <Link
                href={'/sign-up'}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Sing up
              </Link>
              <Link
                href={'/sign-in'}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Login
              </Link>
              <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

              <Link
                href={'/configure/upload'}
                className={buttonVariants({
                  size: 'sm',
                  className: 'hidden sm:flex items-center gap-1',
                })}
              >
                Create case
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </SignedOut>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
