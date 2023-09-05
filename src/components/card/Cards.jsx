/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
export const Cards = ( ) => {
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
      <div className="flex flex-wrap justify-center gap-16">
        {data &&
          data.map((personaje) => {
            if (personaje.isPlayableCharacter) {
              return (
                <Link
                  key={personaje.uuid}
                  to={"/details"}
                  state={{ datosPersonaje: personaje }}
                >
                  <Card isFooterBlurred radius="lg" className="border-none">
                    <Image
                      isZoomed
                      alt=""
                      className="h-[350px] w-[350px] object-cover sm:h-[250px] sm:w-[250px]"
                      src={personaje.displayIcon}
                    />
                    <CardFooter className=" absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
                      <img
                        src={personaje.role.displayIcon}
                        className="w-8 px-1"
                      ></img>
                      <p className="text-center font-primary text-3xl text-white/80">
                        {personaje.displayName}
                      </p>
                    </CardFooter>
                  </Card>
                </Link>
              );
            }
          })}
      </div>
    </>
  );
};
