import Image from "next/image";
import Link from "next/link";

import Data from "../data/projects.json";

export default function Portfolio() {
  return (
    <section className="site-portfolio py-14">
      <h5 className="text-center text-base font-medium text-yellow">
        PORTFOLIO
      </h5>
      <h1 className="text-center text-3xl font-medium">My Portfolio</h1>
      <p className="mt-7 mb-3 text-right ">
        <Link href="#">
          <a className="text-sm font-medium text-yellow">
            Explore All Services
          </a>
        </Link>
      </p>
      <div className="portfolio grid grid-cols-3 gap-x-5 gap-y-7">
        {Data &&
          Data.map((item) => (
            <article
              className="rounded-xl bg-yellow/[.16] px-6 py-6 pb-10 shadow-lg"
              key={`portfolio-index-${item.Id}`}
            >
              <div className="card-img ">
                <Image
                  src={item.ThumbnailUrl}
                  layout="fill"
                  alt={item.Title}
                  objectFit="cover"
                />
              </div>
              <h1 className="mt-4 text-sm text-yellow">{item.Title}</h1>
              <h1 className="mt-3 text-xl font-medium">
                Mobile App Landing Design & Service
              </h1>
            </article>
          ))}
      </div>
    </section>
  );
}
