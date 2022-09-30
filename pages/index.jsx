import About from "../components/about-me";
import Archivement from "../components/archivement";
import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import Info from "../components/info";
import Portfolio from "../components/portfolio";
import Project from "../components/project";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Info />
          <About />
          <Portfolio />
          <Archivement />
          <Project />
        </Container>
        <Footer />
      </main>
    </>
  );
}
