import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  
  return (
    <div>
      <ThemeSwitcher />
      <div className="w-full h-full px-4 py-8 bg-white dark:bg-stone-900 md:px-8 md:py-16">
        <Home />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
