import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { DownloadCV } from "./components/DownloadCV";

function App() {
  
  return (
    <div>
      <ThemeSwitcher />
      <DownloadCV />
      <div className="w-full h-full px-4 bg-white py-7 dark:bg-stone-900 md:px-8 md:py-16 sm:px-12 lg:px-16 xl:px-20">
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
