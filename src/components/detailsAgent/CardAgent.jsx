import { Image } from "@nextui-org/react";
export const CardAgent = ({imgAgente}) => {
  return (
    <>
      <div className="flex">
        <div className="flex-col-8 flex  bg-[url('https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png')] bg-no-repeat">
          <Image
            alt=""
            className="align-content-center h-[600px]"
            src={imgAgente}
          />
        </div>
      </div>
    </>
  );
};
