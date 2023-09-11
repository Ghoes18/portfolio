import timeline from '../data/timeline.json';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

export function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      {timeline.map((item: TimelineItemProps) => (
        <TimelineItem key={item.year} {...item} />
      ))}
    </div>
  );
}