import Header from '../app/components/Header'
import '../app/styles/globals.css';
import Footer from '../app/components/Footer';
import Hero from '../app/components/Hero';
import Element from '../app/components/Element';
import Ingredient from '../app/components/Ingredient';
import Latest from '../app/components/Latest';
export default function Home() {
  return (
    <div className="app">
        <Header />
        <Hero />
        <Element />
        <Ingredient />
        <Latest />
        <Footer />
    </div>
  
  );
}
