import { Badge } from "./ui/badge";

interface SkillsBadgesProps {
  readonly skills: string[];
  readonly highlightedSkills: string[];
}

export default function SkillsBadges({
  skills,
  highlightedSkills,
}: Readonly<SkillsBadgesProps>) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <Badge
          key={skill}
          variant={highlightedSkills.includes(skill) ? "default" : "secondary"}
          className="px-4 py-2 text-sm font-medium"
        >
          {skill}
        </Badge>
      ))}
    </div>
  );
}
