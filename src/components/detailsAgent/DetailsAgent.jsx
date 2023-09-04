import { useState } from "react";
import { CardAgent } from "./CardAgent";
import { Header } from "../navbar/Header";
import { useLocation } from "react-router-dom";



export const DetailsAgent = (datosPersonaje) => {
  const location = useLocation();
  const datosAgente = location.state.datosPersonaje;
  console.log(location.state.datosPersonaje);
  return (
    <>
      <Header></Header>

      <div className=" container mx-auto ">
        <h1 className="py-14 text-center text-xl">Detalles del Agente</h1>
        <CardAgent 
        imgAgente={datosAgente.fullPortrait}
        imgBg={datosAgente.background}
        description={datosAgente.description}
        >
        </CardAgent>
      </div>
    </>
  );
};
