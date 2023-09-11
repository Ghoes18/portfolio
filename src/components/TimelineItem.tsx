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
    <ol className="relative flex flex-col md:flex-row border-1 border-stone-200">
      <li className="flex flex-col items-center justify-center w-16 py-4 text-white md:w-24 bg-stone-200 dark:text-gray-900 dark:bg-gray-200">
        <p className="flex flex-wrap items-center justify-center w-12 h-12 text-2xl font-bold md:w-20 md:h-20">
          <span className="text-center">{year}</span>
          
        </p>
      </li>
    </ol>
  );
}