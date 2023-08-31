import { useState } from "react";
import { handleTheme } from "../../functions/handleTheme";
import { SwitchButton } from "./SwitchButton";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
    handleTheme();
  };
  return (
    <>
      <section className="flex h-32 w-full items-center justify-between bg-purple-300 px-10 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-purple-900 dark:text-purple-200">
          Valorant Wiki
        </h1>
        <SwitchButton handleMode={handleDark}></SwitchButton>
      </section>
    </>
  );
};
