import Link from 'next/link'
import Image from 'next/image'
import { NavLink } from './NavLink'
import { Button } from './Button'

import longLogo from '@/images/logos/LongLogo.png'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src={longLogo} alt="Logo" className="h-11 w-auto" />
      </Link>

      {/* Centered Links */}
      <div className="flex flex-grow justify-center space-x-18">
        <NavLink href="/trainings">Trainings</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </div>

      {/* Enroll Now button */}
      <Button href="/trainings" className="ml-4">
        Enroll Now
      </Button>
    </nav>
  )
}

