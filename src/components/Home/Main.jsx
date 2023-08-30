import { useEffect } from "react";
import { Header } from "../navbar/Header";
export const Main = () => {
  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((res) => {
        if (!res.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Header></Header>
      <main className="h-[900px] bg-purple-100 px-10 py-5 dark:bg-gray-800">
        <div className="dark:text-purple-100">Tus favoritos</div>
      </main>
    </>
  );
};
