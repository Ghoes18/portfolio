import timeline from "../data/timeline.json";
import { TimelineItem, TimelineItemProps } from "./TimelineItem";

import { Title } from "./Title";

export function Timeline() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Title>Timeline</Title>
      <div className="w-full max-w-2xl px-4 py-8 mx-auto md:px-8 md:py-12">
        {timeline.map((item: TimelineItemProps) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
