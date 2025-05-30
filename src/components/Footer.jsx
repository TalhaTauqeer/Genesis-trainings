import Link from 'next/link'
import Image from 'next/image'
import LongLogo from '@/images/logos/LongLogo.png'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

// Import your icons from local folder
import FacebookIcon from '@/images/icons/Facebook.png'
import InstagramIcon from '@/images/icons/Instagram.png'
import XIcon from '@/images/icons/X.png'
import LinkedInIcon from '@/images/icons/LinkedIn.png'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172B', color: 'white' }}>
      <Container>
        <div className="py-10">
          <div className="mx-auto w-auto flex justify-center">
            <Image src={LongLogo} alt="Genesis Trainings Logo" height={40} />
            {/* Adjust height or add width if needed */}
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6 text-white">
              <NavLink href="/trainings">Trainings</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </div>
          </nav>
        </div>

        <div className="flex flex-col items-center border-t border-slate-400/10 py-6 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            {/* Instagram Icon */}
            <Link href="https://www.instagram.com/" className="group" aria-label="Instagram">
              <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
            </Link>
            {/* X (formerly Twitter) Icon */}
            <Link href="https://twitter.com/" className="group" aria-label="X">
              <Image src={XIcon} alt="X" width={24} height={24} />
            </Link>
            {/* LinkedIn Icon */}
            <Link href="https://www.linkedin.com/" className="group" aria-label="LinkedIn">
              <Image src={LinkedInIcon} alt="LinkedIn" width={24} height={24} />
            </Link>
            {/* Facebook Icon */}
            <Link href="https://www.facebook.com/" className="group" aria-label="Facebook">
              <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
            </Link>
          </div>
          <p className="mt-6 text-sm text-white sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Genesis Trainings. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
