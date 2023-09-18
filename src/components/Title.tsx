export interface TitleProps {
  children: React.ReactNode;
  id?: string;
}

export function Title({ children, id }: TitleProps) {
  return (
    <h1 id={id} className="text-2xl font-bold text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  );
}