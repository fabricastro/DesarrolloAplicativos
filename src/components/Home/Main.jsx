import { useEffect, useState } from "react";
import { Header } from "../Navbar/Header";
import { Cards } from "./../card/Cards";
import {Footer} from "../footer/Footer";
export const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents?language=es-MX")
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
      <main className=" bg-secondary py-10 ">
        <section>
          <div className="container mx-auto">
            <h1 className="p-10 text-start font-primary text-6xl ">Agentes</h1>
            <div className="flex flex-wrap justify-center gap-16">
              {data &&
                data.map((personaje) => {
                  if (personaje.isPlayableCharacter) {
                    return (
                      <Cards key={personaje.uuid} personaje={personaje}></Cards>
                    );
                  }
                })}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};
