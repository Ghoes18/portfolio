import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-4 space-y-3">
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
      <a
        href="https://drive.proton.me/urls/RJXCEV6E4W#P64W56V5xbHQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold md:hidden text-violet-500"
      >
        Download CV
      </a>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/gonçalo-guimarães-11547220a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-500 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
        >
          <FaLinkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Ghoes18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-stone-500 dark:text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
        >
          <FaGithub className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
      </div>
    </footer>
  );
}