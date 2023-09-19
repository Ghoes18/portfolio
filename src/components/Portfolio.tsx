import portfolio from "../data/portfolio.json";
import { PortfolioItem, PortfolioItemProps } from "./PortfolioItem";

import { FaGithub } from "react-icons/fa";

export function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 mb-6">
      <div className="flex flex-col items-center justify-center mb-8 md:flex-row">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item: PortfolioItemProps) => (
            <PortfolioItem key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto space-y-8">
        <a
          href="https://github.com/Ghoes18/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-800 bg-gray-200 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          <FaGithub className="text-2xl" />
          <span className="ml-2">Github Profile</span>
        </a>
      </div>
    </div>
  );
}
