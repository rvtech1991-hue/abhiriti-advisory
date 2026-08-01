import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { ClientMarquee } from './components/ClientMarquee/ClientMarquee';
import { About } from './components/About/About';
import { CoreServices } from './components/CoreServices/CoreServices';
import { Stats } from './components/Stats/Stats';
import { Testimonials } from './components/Testimonials/Testimonials';
import { ClientsGrid } from './components/ClientsGrid/ClientsGrid';
import { CtaBanner } from './components/CtaBanner/CtaBanner';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.root}>
      <Nav />
      <Hero />
      <ClientMarquee />
      <About />
      <CoreServices />
      <Stats />
      <Testimonials />
      <ClientsGrid />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
