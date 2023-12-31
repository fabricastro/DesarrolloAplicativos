import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../navbar/Header";
import { Card, CardFooter, Image } from "@nextui-org/react";

export const Maps = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps?language=es-MX")
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
      <section className="bg-secondary py-10 ">
        <div className="container mx-auto">
          <h1 className="p-10 text-start font-primary text-6xl ">Mapas</h1>
          <div className=" flex flex-wrap justify-center gap-[60px]">
            {data &&
              data.map((mapa) => {
                return (
                  <div key={mapa.uuid}>
                    <Card isFooterBlurred radius="lg" className="border-none">
                      <Image isZoomed className="w-[450px]" src={mapa.splash} />
                      <CardFooter className=" absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
                        <img src={mapa.displayIcon} className="w-8 px-1"></img>
                        <p className="text-center font-primary text-3xl text-white/80">
                          {mapa.displayName}
                        </p>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
