import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const CardAgent = ({ imgAgente, imgBg, description, abilities }) => {
  return (
    <>
      <div className="flex flex-col p-8 sm:flex-row ">
        <div className="relative h-[500px] w-full sm:h-[700px] sm:w-1/2">
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto motion-safe:animate-pulse  "
            src={imgBg}
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto   animate-appearance-in"
            src={imgAgente}
            alt=""
          />
        </div>
        <div className="w-full bg-[url()] sm:w-1/2">
          <h1 className="pb-4 text-end text-5xl font-valorant">BIOGRAFÍA</h1>
          <p className="">{description}</p>
          <Tabs aria-label="Habilities"  items={abilities}>
            {(item) => (
              <Tab
              className=" px-12"
                key={item.slot}
                title={
                  <div className="flex text-center space-x-2">
                    <img
                      src={item.displayIcon}
                      alt="display icon agent"
                      className="w-6"
                    />
                    <span>{item.displayName}</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>{item.description}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </>
  );
};
