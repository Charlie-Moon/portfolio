import { Fragment } from "react";
import { Popover, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = [
  {
    name: "HOME",
    url: "/",
  },
  {
    name: "ABOUT ME",
    url: "/about",
  },
  {
    name: "SERVICES",
    url: "/services",
  },
  {
    name: "PORTFOLIO",
    url: "/portfolio",
  },
  {
    name: "CONTACT ME",
    url: "/contact",
  },
];

export default function Example() {
  return (
    <Popover className="relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="flex items-center justify-between border-b border-indigo-400 border-opacity-25 py-5 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="#">
              <a>
                <h1 className="site-title md:text-5xl">Sereyvath CHEA</h1>
              </a>
            </Link>
          </div>
          <div className=" md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-indigo-900  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <ul className="navbar hidden md:flex">
              {Navbar &&
                Navbar.map((item, index) => (
                  <li key={`Navbar-item-${index}`}>
                    <Link href={item.url}>
                      <a className="text-sm font-medium hover:underline">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
            </ul>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 h-screen origin-top-right transform transition md:hidden"
        >
          <div className="divide-y-2 h-full divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="space-y-10 px-5 pt-5 pb-2">
              <div className="flex items-center justify-end">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <nav className="grid gap-y-8">
                <ul className="navbar space-y-7 text-right">
                  {Navbar &&
                    Navbar.map((item, index) => (
                      <li key={`Navbar-item-${index}`}>
                        <Link href={item.url}>
                          <a className="text-xl font-medium hover:underline">
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
