'use client'

import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'
import AccountMenu from './AccountMenu'

const TOP_OFFSET = 66

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const toggleAccountMenu = () => {
    setShowAccountMenu(!showAccountMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed z-40 w-full">
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 ${showBackground ? 'bg-zinc-900/90' : ''}`}
      >
        <picture>
          <img src={'/images/logo.png'} className="h-4 lg:h-7" alt="" />
        </picture>
        <div className="ml-8 hidden flex-row gap-7 lg:flex">
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Films" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse by languages" />
        </div>
        <div
          className="relative ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden"
          onClick={toggleMobileMenu}
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown
            className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="ml-auto flex flex-row items-center gap-7">
          <div className="cursor-pointer text-gray-200 hover:text-gray-300">
            <BsSearch />
          </div>
          <div className="cursor-pointer text-gray-200 hover:text-gray-300">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="relative flex cursor-pointer flex-row items-center gap-2"
          >
            <div className="size-6 overflow-hidden rounded-md lg:size-10">
              <picture>
                <img src={'/images/default-green.png'} alt="main logo" />
              </picture>
            </div>
            <BsChevronDown
              className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
