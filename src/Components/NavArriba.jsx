import React from 'react'

export const NavArriba = () => {
    return (
      <div className='relative bg-gray-900 z-50'>
        <nav className="bg-gray-800 py-3 text-white">
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:text-gray-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
      );
}
