/* eslint-disable react/prop-types */
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
export const Cards = ({ personaje }) => {
  return (
    <>
      <Link
        to={"/details"}
        state={{ datosPersonaje: personaje, texto: "gola" }}
      >
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            isZoomed
            alt=""
            className="h-[350px] w-[350px] object-cover sm:h-[250px] sm:w-[250px]"
            src={personaje.displayIcon}
          />
          <CardFooter className=" absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
            <img src={personaje.role.displayIcon} className="w-8 px-1"></img>
            <p className="text-center font-primary text-3xl text-white/80">
              {personaje.displayName}
            </p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};
