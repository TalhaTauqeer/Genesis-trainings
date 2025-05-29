import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172B', color: 'white' }}>
      <Container>
        <div className="py-10">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
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
              <svg
                className="h-6 w-6 fill-white group-hover:fill-slate-300"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 10.2c2.356 0 4.2-1.844 4.2-4.2 0-2.355-1.844-4.2-4.2-4.2-2.356 0-4.2 1.845-4.2 4.2 0 2.356 1.844 4.2 4.2 4.2zm9.2-4.2c0 5.735-4.665 10.4-10.4 10.4-5.735 0-10.4-4.665-10.4-10.4 0-5.735 4.665-10.4 10.4-10.4 5.735 0 10.4 4.665 10.4 10.4zm-9.2 3.8c-1.655 0-3-1.345-3-3 0-1.655 1.345-3 3-3 1.655 0 3 1.345 3 3 0 1.655-1.345 3-3 3z" />
              </svg>
            </Link>
            {/* X (formerly Twitter) Icon */}
            <Link href="https://twitter.com/" className="group" aria-label="X">
              <svg
                className="h-6 w-6 fill-white group-hover:fill-slate-300"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
            </Link>
            {/* LinkedIn Icon */}
            <Link href="https://www.linkedin.com/" className="group" aria-label="LinkedIn">
              <svg
                className="h-6 w-6 fill-white group-hover:fill-slate-300"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M19.1 3h-14c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-16c0-.55-.45-1-1-1zm-11.3 14.9h-2v-9.2h2v9.2zm-1-10.2c-.65 0-1.2-.55-1.2-1.2s.55-1.2 1.2-1.2 1.2.55 1.2 1.2-.55 1.2-1.2 1.2zm13 10.2h-2v-4.6c0-1.1-.9-2-2-2-1.1 0-2 .9-2 2v4.6h-2v-9.2h2v1.4c1.2-1.6 3.6-1.4 4.6-.1v7.8z" />
              </svg>
            </Link>
            {/* Facebook Icon */}
            <Link href="https://www.facebook.com/" className="group" aria-label="Facebook">
              <svg
                className="h-6 w-6 fill-white group-hover:fill-slate-300"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path d="M20.78 3.22C20.45 2.89 19.94 2.78 19.44 2.78c-1.1 0-2.17.46-2.94 1.3-1.11-1.05-2.54-1.7-4.08-1.7-3.25 0-5.88 2.64-5.88 5.89 0 .46.05.91.14 1.34-4.57-.23-8.54-2.42-11.37-5.78C.25 3.62 0 4.2 0 4.88c0 1.1.88 2 2 2 1.32 0 2.57-.5 3.54-1.37 2.62 2.87 6.51 4.79 10.59 5.06-.06.25-.09.5-.09.76 0 3.25 2.64 5.89 5.88 5.89 1.07 0 2.09-.31 2.98-.84-.26-.72-.4-1.48-.4-2.28 0-4.02 3.26-7.28 7.28-7.28.34 0 .67.03 1.01.08-.33-.64-.5-1.38-.5-2.13 0-.86.32-1.67.86-2.28z" />
              </svg>
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
