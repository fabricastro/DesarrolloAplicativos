import { Header } from "../navbar/Header";
import { Cards } from "../card/Cards";
import { Footer } from "../footer/Footer";
export const Main = () => {
  return (
    <>
      <Header></Header>
      <main className=" bg-secondary py-10 ">
        <section>
          <div className="container mx-auto">
            <h1 className="p-10 text-start font-primary text-6xl ">Agentes</h1>
            <Cards></Cards>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};
