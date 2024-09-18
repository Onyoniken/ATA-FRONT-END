import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo2.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavbarComponent() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  useEffect(() => {
    // Update active item based on current path
    setActiveItem(location.pathname);
  }, [location]);

  const handleScroll = (href) => {
    setActiveItem(`#${href}`);
  };

  const navigation = [
    { name: 'Home', href: 'home', scroll: true },
    { name: 'About', href: 'about', scroll: true },
    { name: 'Courses', href: 'courses', scroll: true },
    { name: 'Contacts', href: 'contacts', scroll: true },
    { name: 'Services', href: 'services', scroll: true },
    { name: 'Blogspace', href: '/blogspace', scroll: false }, 
    { name: 'Motivation', href: 'motivation', scroll: true },
    { name: 'Trainers', href: 'trainers', scroll: true },
  ];

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-navy-blue z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 cursor-pointer">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="home" smooth={true} duration={500} onClick={() => setActiveItem('/home')}>
                    <img className="block h-12 w-auto" src={logo} alt="ATA" />
                  </Link>
                </div>

                {/* Add a decorative text here */}
                <div className="hidden sm:flex flex-grow justify-center items-center">
                  <h1 className="text-white text-2xl font-semibold">Akili Tech Africa</h1>
                </div>

                <div className="flex flex-1 items-center justify-between sm:items-stretch">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        item.scroll ? (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => handleScroll(item.href)}
                            className={classNames(
                              activeItem === `#${item.href}`
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-lg font-medium'
                            )}
                            smooth={true}
                            duration={500}
                          >
                            {item.name}
                          </Link>
                        ) : (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-lg font-medium'
                              )
                            }
                            onClick={() => setActiveItem(item.href)}
                          >
                            {item.name}
                          </NavLink>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                item.scroll ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleScroll(item.href)}
                    className={classNames(
                      activeItem === `#${item.href}`
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    smooth={true}
                    duration={500}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )
                    }
                    onClick={() => setActiveItem(item.href)}
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
