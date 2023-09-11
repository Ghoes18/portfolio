import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Timeline } from "./components/Timeline";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full h-full bg-white dark:bg-gray-900">
      <Home />
      <Portfolio />
      <Contact />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
