import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Heart, Phone, Mail } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">Dogs of Bombay House</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/dogs" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Dogs
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link to="/events" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Events
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              <span>info@dogsofbombayhouse.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/dogs" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Dogs
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/events" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Events
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Gallery
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}