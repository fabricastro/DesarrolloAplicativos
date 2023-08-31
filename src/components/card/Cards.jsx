import React, { useState, useEffect } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

export const Cards = ({ agentUuid, imagen, nombreAgente }) => {
  const [isAgenteDetalleVisible, setIsAgenteDetalleVisible] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = "/details";
  };

  return (
    <>
      <button onClick={handleClick}>
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt=""
            className="object-cover"
            height={200}
            src={imagen}
            width={200}
          />
          <CardFooter className=" absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large border-1 border-white/20 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
            <p className="text-center text-white/80">{nombreAgente}</p>
          </CardFooter>
          {isAgenteDetalleVisible ? <AgenteDetalle /> : null}
        </Card>
      </button>
    </>
  );
};
