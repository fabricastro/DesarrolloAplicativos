import { CardAgent } from "./CardAgent";
import { Header } from "../navbar/Header";
import { useLocation, ScrollRestoration } from "react-router-dom";
import { Button, Link } from "@nextui-org/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Footer } from "../footer/Footer";

export const DetailsAgent = () => {
  const location = useLocation();
  const datosAgente = location.state.datosPersonaje;
  return (
    <>
      <ScrollRestoration />
      <Header></Header>
      <section className=" bg-secondary py-16 sm:py-28 ">
        <div className="container mx-auto ">
          <Button
            as={Link}
            color="primary"
            className="z-10 mx-8 font-secondary "
            href="/home"
          >
            <BsFillArrowLeftCircleFill />
            VOLVER
          </Button>
          <CardAgent datosAgente={datosAgente}></CardAgent>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
