import Link from 'next/link'
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header className='flex h-24 flex-col justify-center bg-stone-100'>
      <nav className='container'>
        <ul className='flex items-center justify-between gap-8 font-medium tracking-wider text-stone-500'>
          <li className='uppercase'>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <SignInButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
