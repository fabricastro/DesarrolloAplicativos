import { CardAgent } from "./CardAgent";
import { Header } from "../navbar/Header";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export const DetailsAgent = () => {
  const location = useLocation();
  const datosAgente = location.state.datosPersonaje;
  return (
    <>
      <Header></Header>
      <section className="h-[112vh]  bg-secondary">
        <div className="container mx-auto pt-5">
          <Link to="/home">
            <Button color="primary" variant="shadow">
              Atrás
            </Button>
          </Link>
        </div>
        <div className=" container mx-auto">
          <h1 className="py-14 text-center text-xl ">Detalles del Agente</h1>
          <CardAgent
            imgAgente={datosAgente.fullPortrait}
            imgBg={datosAgente.background}
            description={datosAgente.description}
            abilities={datosAgente.abilities}
          ></CardAgent>
        </div>
      </section>
    </>
  );
};
