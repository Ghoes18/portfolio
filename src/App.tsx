import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-[100px]">
      <Header />
      <body className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <Profile />
        <Menu />
      </body>
    </div>
  );  
}

export default App;