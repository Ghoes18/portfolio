import portfolio from "../data/portfolio.json";
import { PortfolioItem, PortfolioItemProps } from "./PortfolioItem";

export function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((item: PortfolioItemProps) => (
          <PortfolioItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
