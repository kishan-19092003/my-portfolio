import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}