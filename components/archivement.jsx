import Image from "next/image";
import Link from "next/link";

import Data from "../data/achievement.json";

export default function Archivement() {
  return (
    <section className="site-portfolio py-14">
      <h5 className="text-center text-base font-medium text-yellow">
        Archivement
      </h5>
      <h1 className="text-center text-3xl font-medium">My Archivement</h1>
      <p className="mt-7 mb-3 text-right ">
        <Link href="#">
          <a className="text-sm font-medium text-yellow">
            Explore All Services
          </a>
        </Link>
      </p>
      <div className="archivement grid grid-cols-2 gap-x-8 gap-y-9">
        {Data &&
          Data.map((item, index) => (
            <article
              className="rounded-xl bg-yellow/[.16] px-6 py-6 pb-10 text-center shadow-lg"
              key={`archivement-index-${item.Id}`}
            >
              <div className="card-img relative mx-auto h-16 w-20">
                <Image
                  src={item.IconUrl}
                  layout="fill"
                  alt={item.Title}
                  objectFit="cover"
                  priority="false"
                />
              </div>
              <h1 className="mt-8 text-xl font-medium text-yellow">
                Mobile App Landing Design & Service
              </h1>
              <p className="mt-2">{item.Description}</p>
            </article>
          ))}
      </div>
    </section>
  );
}
