import Link from "next/link";
import Container from "./container";

export default function Header() {
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
          <h1 className="site-title">Sereyvath CHEA</h1>
          <ul className="navbar">
            {Navbar &&
              Navbar.map((item, index) => (
                <li key={`Navbar-item-${index}`}>
                  <Link href={item.url}>
                    <a className="text-sm font-medium hover:underline">
                      {" "}
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </header>
      </Container>
    </section>
  );
}
