import { useEffect, useState } from "react";
import { Header } from "../navbar/Header";
import { Cards } from "./../card/Cards";
export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?language=es-ES" )
      .then((res) => {
        if (!res.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return res.json();
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Header></Header>
      <main className=" bg-purple-100 p-20 dark:bg-gray-800 ">
        <div className="py-5 dark:text-purple-100">
          <h1 className="text-center text-xl sm:text-left">Agentes</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          {data &&
            data.map((personaje) => {
              if (personaje.isPlayableCharacter) {
                return (
                  <Cards
                    key={personaje.uuid}
                    personaje={personaje}
                  ></Cards>
                );
              }
            })}
        </div>
      </main>
    </>
  );
};
