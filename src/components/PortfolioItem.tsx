export interface PortfolioItemProps {
  title: string;
  imgUrl: string;
  stack: string[];
  description: string;
  githubUrl: string;
  liveUrl: string;
}

export function PortfolioItem({
  title,
  imgUrl,
  stack,
  description,
  githubUrl,
  liveUrl,
}: PortfolioItemProps) {
  return (
    <div className="w-full max-w-md mx-auto overflow-hidden bg-white border rounded-lg shadow-xl border-stone-100 dark:bg-gray-800 dark:border-stone-900">
      <img
        src={imgUrl}
        alt="portfolio item"
        className="object-cover w-full h-48"
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold md:text-xl md:mb-4 dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap text-xs text-gray-500 dark:text-gray-400 justify-normal md:text-sm">
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 py-1 mb-1 mr-1 font-semibold bg-gray-200 border-2 rounded border-stone-900 dark:bg-gray-800 dark:border-stone-100"
            >
              {tech}
            </span>
          ))}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
        <div className="flex justify-end mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 mr-2 text-sm font-bold bg-gray-200 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-stone-900 dark:text-stone-100"
            >
              Github
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="nope ner noreferrer"
              className="px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
