import Hero from './Hero';
import Cta from './Cta';
import Footer from './Footer';
import About from './About';
import Features from './Features';

const Home = ({session, router}) => {

  return (
    <>
      <Hero session={session} router={router} />
      <About />
      <Features />
      <Cta router={router} />
      <Footer />
    </>
  );
};

export default Home;
