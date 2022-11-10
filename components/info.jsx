import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import infoProfile from "../public/profile.jpg";
import infoProfile1 from "../public/profile-1.jpg";
import infoData from "../data/info.json";

export default function Info() {
  return (
    <section className="site-info flex flex-col-reverse gap-y-20 py-8 md:flex-row md:py-14">
      {infoData &&
        infoData.map((dataItem, index) => (
          <Fragment key={`data-item-${index}`}>
            <div className="info-text md:w-1/2">
              <h5 className="text-lg text-yellow md:text-2xl">
                {dataItem.greet}
              </h5>
              <h1 className="mt-2 text-4xl font-bold md:text-7xl">
                {dataItem.name}
              </h1>
              <h4 className="mt-2 text-base text-yellow md:text-2xl">
                {dataItem.position}
              </h4>
              <p className="mt-2 text-lg">{dataItem.description}</p>
              <Link href="#">
                <a className="btn-link mt-10 inline-flex rounded-lg bg-cyan px-10 py-3 md:mt-16">
                  {dataItem.btn}
                </a>
              </Link>
            </div>
            <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-full bg-cyan md:w-1/2">
              <Image
                src={infoProfile1}
                layout="fill"
                alt=""
                objectFit="cover"
                priority="false"
              />
            </div>
          </Fragment>
        ))}
    </section>
  );
}
