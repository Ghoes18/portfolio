export interface TimelineItemProps {
  year: number;
  title: string;
  duration: string;
  company: string;
  details: string;
}

export function TimelineItem({
  year,
  title,
  duration,
  details,
}: TimelineItemProps) {
  return (
    <ol className="relative flex flex-col border-l md:flex-row dark:border-stone-200 border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 dark:bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 bg-stone-700" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white rounded-md dark:text-stone-900 bg-stone-900 dark:bg-white">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}
