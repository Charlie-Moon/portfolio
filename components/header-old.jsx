import Link from "next/link";
import Container from "./container";
import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";

export default function HeaderOld() {
  const [clicked, setClicked] = useState(false);

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
  return (
    <section className="site-header bg-cyan">
      <Container>
        <header className="site-wrap">
          <Popover>
            <h1 className="site-title md:text-5xl">Sereyvath CHEA</h1>
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
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>x
            </Popover.Button>
            <ul className="flex-col gap-y-4 md:flex">
              {Navbar &&
                Navbar.map((item, index) => (
                  <li key={`Navbar-item-${index}`}>
                    <Link href={item.url}>
                      <a className="text-sm font-medium">{item.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </Popover>
        </header>
      </Container>
    </section>
  );
}
