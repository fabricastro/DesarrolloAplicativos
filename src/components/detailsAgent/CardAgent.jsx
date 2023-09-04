import { Image } from "@nextui-org/react";
export const CardAgent = ({ imgAgente, imgBg, description }) => {
  console.log(imgAgente);
  return (
    <>
      <div className="flex flex-row">
        <div className="">
          <Image alt="" className="" src={imgBg} />
          <Image alt="" className="top-[-650px]" src={imgAgente} />
        </div>
        <div className="">
          <h1 className="text-center text-xl">Descripción</h1>
          <p className="">{description}</p>
        </div>
      </div>
    </>
  );
};
