/* eslint-disable react/prop-types */
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const CardAgent = ({ datosAgente }) => {
  return (
    <>
      <div className="flex flex-col p-8 sm:flex-row ">
        <div className="relative h-[500px] w-full sm:h-[700px] sm:w-1/2">
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto motion-safe:animate-pulse  "
            // eslint-disable-next-line react/prop-types
            src={datosAgente.background}
          />
          <img
            className="absolute bottom-0 left-0 right-0 top-0 m-auto animate-appearance-in"
            src={datosAgente.fullPortrait}
          />
        </div>
        <div className="w-full bg-[url()] sm:w-1/2">
          <h1 className="pb-4 text-start  font-primary text-7xl">
            {datosAgente.displayName}
          </h1>
          <p className=" pb-4 text-start font-primary text-4xl">
            <img
              src={datosAgente.role.displayIcon}
              className=" inline-flex w-8 px-1 py-2 pb-3"
            />
            {datosAgente.role.displayName}
          </p>
          <h3 className="pb-3 text-end font-primary text-6xl">BIOGRAFÍA</h3>
          <p className="pb-6">{datosAgente.description}</p>
          <div className="flex w-full flex-col">
            <Tabs aria-label="Habilities" items={datosAgente.abilities}>
              {(item) => (
                <Tab
                  className=" px-8 sm:px-12"
                  key={item.slot}
                  title={
                    <div className="flex justify-center space-x-2 text-center">
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
      </div>
    </>
  );
};
