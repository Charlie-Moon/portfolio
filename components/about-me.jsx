import Image from "next/image";
import Link from "next/link";

// import img //
import aboutMe from "../public/about-me.png";
import expIcon from "../public/icons/experience.svg";
import projectIcon from "../public/icons/project.svg";
import contactIcon from "../public/icons/contact.svg";

export default function About() {
  return (
    <section className="site-about flex pb-14 pt-24">
      <div className="about-profile relative mr-32 h-[551px] w-5/12">
        <Image
          src={aboutMe}
          layout="fill"
          alt="about me"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
      <div className="about-text w-7/12">
        <h5 className="mt-2 text-xl text-yellow">A BIT</h5>
        <h1 className="mt-2 text-4xl">About Me</h1>
        <p className="mt-2 text-lg">
          I’m a top online marketer and branding expert, I started my career by
          lauching the popular metaverse design, in just a few short years, I
          built the brand to millions of social media followers and websites
          visitors. I also created award-winning online products with millions
          of dolloars in online sales you want, you never get personalized
          experiences and they can be upwards of $1000 on hour.
        </p>
        <div className="group-icons mt-8 flex justify-between">
          <div className="relative flex gap-4">
            <Image
              src={expIcon}
              layout="fill"
              alt="exp icon"
              className="static"
            />
            <div className="flex flex-col font-medium">
              <h5 className="text-yellow">4 years+</h5>
              <h5 className="font-normal">Experience</h5>
            </div>
          </div>
          <div className="relative flex gap-4">
            <Image
              src={projectIcon}
              layout="fill"
              alt="exp icon"
              className="static"
            />
            <div className="flex flex-col font-medium">
              <h5 className="text-yellow">1200+</h5>
              <h5 className="font-normal">Projects</h5>
            </div>
          </div>
          <div className="relative flex gap-4">
            <Image
              src={contactIcon}
              layout="fill"
              alt="exp icon"
              className="static"
            />
            <div className="flex flex-col font-medium">
              <h5 className="text-yellow">24/7</h5>
              <h5 className="font-normal">Customer Support</h5>
            </div>
          </div>
        </div>
        <Link href="#">
          <a className="btn-link mt-16 inline-flex rounded-lg bg-yellow px-10 py-3">
            Contact Me
          </a>
        </Link>
      </div>
    </section>
  );
}
