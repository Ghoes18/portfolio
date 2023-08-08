import { ThemeSwitcher } from "../ThemeSwitcher";

export function Header() {
  return (
    <header className="flex flex-row justify-between py-[44px] items-center h-[104px]">
      <div>
        <h1 className="text-2xl font-pacifico">
          <span className="text-black dark:text-white">
            Gonçalo{" "}
          </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Guimarães
          </span>
        </h1>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
