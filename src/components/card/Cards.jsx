import { useState } from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
export const Cards = ({ personaje }) => {
  const [isAgenteDetalleVisible, setIsAgenteDetalleVisible] = useState(false);

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
            className="object-cover"
            height={200}
            src={personaje.displayIcon}
            width={200}
          />
          <CardFooter className=" absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
            <p className="text-center text-white/80">{personaje.displayName}</p>
          </CardFooter>
          {isAgenteDetalleVisible ? <AgenteDetalle /> : null}
        </Card>
      </Link>
    </>
  );
};
