import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import aboutProfile from "../public/about.jpg";

import aboutData from "../data/about.json";

export default function About() {
  return (
    <section className="site-about flex flex-col gap-y-10 py-8 md:flex-row md:py-14 md:pt-24">
      {aboutData &&
        aboutData.map((dataItem, index) => (
          <Fragment key={`about-index-${index}`}>
            <div className="about-profile relative mx-auto h-[313px] w-[244px] overflow-hidden rounded-md md:mr-32 md:h-[551px] md:w-5/12">
              <Image
                // src={aboutProfile}
                src={dataItem.AboutImg}
                layout="fill"
                alt="about me"
                objectFit="cover"
                priority="false"
              />
            </div>
            <div className="about-text md:w-7/12">
              <h5 className="mt-2 text-xl text-yellow">{dataItem.greet}</h5>
              <h1 className="mt-2 text-4xl">{dataItem.about}</h1>
              <p className="mt-2 text-lg">{dataItem.description}</p>
              <div className="group-icons mt-8 flex justify-between">
                {dataItem.aboutIcons.map((iconItem, index) => (
                  <div
                    className="flex gap-2 md:gap-4"
                    key={`about-icon-${index}`}
                  >
                    <div className="relative w-7 md:w-14">
                      <Image
                        src={iconItem.icon}
                        layout="fill"
                        objectFit="contain"
                        alt="exp icon"
                      />
                    </div>
                    <div className="flex flex-col font-medium">
                      <h5 className="text-yellow">{iconItem.year}</h5>
                      <h5 className="text-sm font-normal">
                        {iconItem.iconText}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#">
                <a className="btn-link mt-10 inline-flex rounded-lg bg-cyan px-10 py-3 md:mt-16">
                  {dataItem.btnContact}
                </a>
              </Link>
            </div>
          </Fragment>
        ))}
    </section>
  );
}
