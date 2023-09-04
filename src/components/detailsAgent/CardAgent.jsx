import { Image } from "@nextui-org/react";
export const CardAgent = ({ imgAgente, imgBg, description }) => {
  return (
    <>
      <div className="flex flex-col p-8 sm:flex-row">
        <div className="relative h-[500px] w-full sm:h-[700px] sm:w-1/2">
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto"
            src={imgBg}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto"
            src={imgAgente}
            alt=""
          />
        </div>
        <div className="w-full bg-[url()] sm:w-1/2">
          <h1 className="pb-4 text-center text-xl">Descripción</h1>
          <p className="">{description}</p>
        </div>
      </div>
    </>
  );
};
