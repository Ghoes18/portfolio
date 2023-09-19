export function Home() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 text-center text-gray-800 pt-15 dark:text-gray-100">
      <h1 className="text-4xl font-bold md:text-6xl">
        Hi, I'm Gonçalo Guimarães
      </h1>
      <p className="mt-4 text-xl font-semibold text-bold">
        Full Stack Web Developer
      </p>
      <p className="max-w-xl m-3 text-sm text-gray-500 dark:text-gray-400">
        A dedicate Full Stack Developer with a passion for learning and creating
        new things. I'm always looking for new challenges and opportunities to
        grow as a developer. I'm currently looking for{" "}
        <span className="font-bold dark:text-violet-400 text-violet-700 hover:underline">
          <a
            href="https://www.linkedin.com/in/gon%C3%A7alo-guimar%C3%A3es-11547220a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            a new job
          </a>
        </span>{" "}
        and I'm open to new opportunities.
      </p>
    </div>
  );
}
