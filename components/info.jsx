import Image from "next/image";
import Link from "next/link";

// import img //
import profile from "../public/perfil 1.png";

export default function Info() {
  return (
    <section className="site-info flex py-14">
      <div className="info-text w-1/2">
        <h5 className="text-2xl text-yellow">Hello, I am</h5>
        <h1 className="text-7xl font-bold">Viseth Kong</h1>
        <h4 className="text-2xl text-yellow">UI/UX & Frontend Developer</h4>
        <p className="text-lg">
          I’m a top online marketer and branding expert, I started my career by
          lauching the popular metaverse design, in just a few short years, I
          built the brand to millions of social media followers and websites
          visitors.
        </p>
        <Link href="#">
          <a className="btn-link inline-flex rounded-lg bg-yellow px-10 py-3">
            Learn more
          </a>
        </Link>
      </div>

      <div className="relative mx-auto h-96 w-1/2 max-w-sm overflow-hidden rounded-full bg-yellow">
        <Image src={profile} layout="fill" alt="" objectFit="contain" />
      </div>
    </section>
  );
}
