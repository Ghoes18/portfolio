import { GoHome } from "react-icons/go";
import { BsBag, BsChatLeftDots, BsFileEarmarkText } from "react-icons/bs";

export function Menu() {
  return (
    <nav className="flex flex-row px-4 py-2 mt-4 rounded-lg shadow-md space-x-14 bg-gray-50 dark:bg-gray-800">
      <a
        href="#"
        className="flex flex-col items-center justify-center w-20 h-20 px-2 py-1 text-sm text-gray-800 transition-colors duration-300 ease-in-out bg-gray-200 rounded-3xl dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <GoHome className="w-5 h-5" />
        Home
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center w-20 h-20 px-2 py-1 text-sm text-gray-800 transition-colors duration-300 ease-in-out bg-gray-200 rounded-3xl dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <BsFileEarmarkText className="w-5 h-5" />
        Resume
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center w-20 h-20 px-2 py-1 text-sm text-gray-800 transition-colors duration-300 ease-in-out bg-gray-200 rounded-3xl dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <BsBag className="w-5 h-5" />
        Work
      </a>
      <a
        href="#"
        className="flex flex-col items-center justify-center w-20 h-20 px-2 py-1 text-sm text-gray-800 transition-colors duration-300 ease-in-out bg-gray-200 rounded-3xl dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        <BsChatLeftDots className="w-5 h-5" />
        Contact
      </a>
    </nav>
  );
}
