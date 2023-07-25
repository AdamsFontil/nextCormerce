'use client'
import './globals.css'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main >
          <nav className='bg-red-400 gap-5 p-5 flex justify-around text-white'>
            <Link className='hover:underline' href="/products">
              Shop
            </Link>
            <Link className='hover:underline' href="/about">
              About
            </Link>
            <Link className='hover:underline text-xl border-2 p-1' href="/">
              Santa Collections & Beauty
            </Link>
            <Link className='hover:underline flex gap-2 items-center' href="/cart">
            <FontAwesomeIcon className='w-4' icon={faShoppingCart} /> Cart
          </Link>
          <Link className='hover:underline flex gap-2 items-center' href="/account">
            <FontAwesomeIcon className='w-4'   icon={faUser} /> My Account
          </Link>
          </nav>
          {children}
          <footer className="p-4 bg-gray-200 text-center">
          <p className="text-gray-600">Made with love by Santa Collections and Beauty LLC</p>
        </footer>
        </main>
      </body>
    </html>
  )
}
