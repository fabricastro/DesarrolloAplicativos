import { CardAgent } from "./CardAgent";
import { Header } from "../navbar/Header";
import { useLocation } from "react-router-dom";



export const DetailsAgent = () => {
  const location = useLocation();
  const datosAgente = location.state.datosPersonaje;
  return (
    <>
      <Header></Header>
      <section className="bg-secondary  h-[112vh]">
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
