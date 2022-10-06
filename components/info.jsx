import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import infoProfile from "../public/profile.jpg";

import infoData from "../data/info.json";

export default function Info() {
  return (
    <section className="site-info flex py-14">
      {infoData &&
        infoData.map((dataItem, index) => (
          <Fragment key={`data-item-${index}`}>
            <div className="info-text w-1/2">
              <h5 className="text-2xl text-yellow">{dataItem.greet}</h5>
              <h1 className="mt-2 text-7xl font-bold">{dataItem.name}</h1>
              <h4 className="mt-2 text-2xl text-yellow">{dataItem.position}</h4>
              <p className="mt-2 text-lg">{dataItem.description}</p>
              <Link href="#">
                <a className="btn-link mt-16 inline-flex rounded-lg bg-cyan px-10 py-3">
                  {dataItem.btn}
                </a>
              </Link>
            </div>
            <div className="relative mx-auto h-96 w-1/2 max-w-sm overflow-hidden rounded-full bg-cyan">
              <Image
                src={infoProfile}
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
