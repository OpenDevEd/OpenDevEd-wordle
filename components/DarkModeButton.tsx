"use client"
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  const handelCLick = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
      <button className="absolute right-4 top-5" onClick={handelCLick}>
          {theme === 'dark' ? <FaSun size={22} /> : <FaMoon size={22} /> }
      </button>
  )
}

export default DarkModeButton;