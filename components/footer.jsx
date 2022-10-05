import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import Container from "./container";

import dataFooter from "../data/footer.json";

import emailIcon from "../public/icons/mail.svg";
import addressIcon from "../public/icons/address.svg";
import phoneIcon from "../public/icons/phone.svg";

export default function Footer() {
  return (
    <footer className="pt-20">
      <Container>
        <section className="grid grid-cols-2 gap-x-6">
          {dataFooter &&
            dataFooter.map((itemHead, index) => (
              <div key={`footer-index-${index}`}>
                <h1 className="text-3xl">{itemHead.title}</h1>
                <p className="mt-2 pr-32">{itemHead.description}</p>
                <ul className="mt-14 space-y-5">
                  {itemHead.contact.map((contactItem, index) => (
                    <Fragment key={`contact-index-${index}`}>
                      <li className="relative flex gap-x-5">
                        <Image
                          src={emailIcon}
                          layout="fixed"
                          width="30px"
                          height="30px"
                          alt={contactItem.email}
                          priority="false"
                        />
                        {contactItem.email}
                      </li>
                      <li className="relative flex gap-x-5">
                        <Image
                          src={addressIcon}
                          layout="fixed"
                          width="30px"
                          height="30px"
                          alt={contactItem.address}
                          priority="false"
                        />
                        {contactItem.address}
                      </li>
                      <li className="relative flex gap-x-5">
                        <Image
                          src={phoneIcon}
                          layout="fixed"
                          width="30px"
                          height="30px"
                          alt={contactItem.phone}
                          priority="false"
                        />
                        {contactItem.phone}
                      </li>
                    </Fragment>
                  ))}
                </ul>
              </div>
            ))}

          <form className="form-group">
            <div className="space-y-5">
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="fullname"
                  placeholder="Name"
                  className="form-control mt-0 block h-20 w-full appearance-none rounded-md border-2 border-white bg-transparent p-3 px-6 placeholder:text-transparent focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="username"
                  className="-z-1 origin-0 absolute top-7 left-5 text-white duration-300"
                >
                  Name <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="form-control mt-0 block h-20 w-full appearance-none rounded-md border-2 border-white bg-transparent p-3 px-6 placeholder:text-transparent focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="email"
                  className="-z-1 origin-0 absolute top-7 left-5 text-white duration-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="website"
                  name="website"
                  placeholder="Website"
                  className="form-control mt-0 block h-20 w-full appearance-none rounded-md border-2 border-white bg-transparent p-3 px-6 placeholder:text-transparent focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="website"
                  className="-z-1 origin-0 absolute top-7 left-5 text-white duration-300"
                >
                  Website <span className="text-red-500">*</span>
                </label>
              </div>
              <div className="relative">
                <textarea
                  type="text"
                  id="message"
                  name="fullname"
                  placeholder="Name"
                  className="form-control mt-0 block h-80 w-full appearance-none rounded-md border-2 border-white bg-transparent p-3 px-6 pt-6 placeholder:text-transparent focus:outline-none focus:ring-0"
                />
                <label
                  htmlFor="message"
                  className="-z-1 origin-0 absolute top-7 left-5 text-white duration-300"
                >
                  Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn-link mt-16 inline-flex rounded-lg bg-cyan px-10 py-3"
            >
              Submit
            </button>
          </form>
        </section>
        <section className="mt-32 grid grid-cols-5">
          {dataFooter &&
            dataFooter.map((itemSub, index) => (
              <Fragment key={`item-sub-index-${index}`}>
                <div className="col-span-2 pr-32">
                  <h1 className="site-title text-yellow">{itemSub.siteName}</h1>
                  <p className="site-description">{itemSub.SiteDescription}</p>
                </div>
                <div>
                  <ul className="menu space-y-10 font-medium">
                    {itemSub.menu1.map((menuItem, index) => (
                      <Fragment key={`menuItem-${index}`}>
                        <li>
                          <Link href={menuItem.url}>
                            <a>{menuItem.name}</a>
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="menu space-y-10 font-medium">
                    {itemSub.menu2.map((menuItem, index) => (
                      <Fragment key={`menuItem2-${index}`}>
                        <li>
                          <Link href={menuItem.url}>
                            <a>{menuItem.name}</a>
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="menu space-y-10 font-medium">
                    {itemSub.menu3.map((menuItem, index) => (
                      <Fragment key={`menuItem3-${index}`}>
                        <li>
                          <Link href={menuItem.url}>
                            <a>{menuItem.name}</a>
                          </Link>
                        </li>
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
        </section>
      </Container>
      <section className="spce-box mt-20 h-14 bg-cyan"></section>
    </footer>
  );
}
