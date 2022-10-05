import Header from "../components/header";
import About from "../components/about-me";
import Archivement from "../components/archivement";
import Container from "../components/container";
import Info from "../components/info";
import Portfolio from "../components/portfolio";
import Success from "../components/success";
import Footer from "../components/footer";

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
          <Success />
        </Container>
        <Footer />
      </main>
    </>
  );
}
