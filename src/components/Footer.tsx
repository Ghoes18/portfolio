import { FaReact } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 py-4">
      <p className="mt-4 text-sm text-center text-stone-500 dark:text-stone-400">
        &copy; {new Date().getFullYear()} Gonçalo Guimarães. All rights reserved.
      </p>
      <a
        className="flex items-center justify-center mt-4 space-x-2 text-sm text-stone-500 dark:text-stone-400"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaReact className="w-6 h-6 text-cyan-500 hover:animate-spin" />
        <span>
          Developed with React
        </span>
      </a>
    </footer>
  );
}