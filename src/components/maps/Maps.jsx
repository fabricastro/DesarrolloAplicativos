import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../navbar/Header";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export const Maps = () => {
  const [data, setData] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps?language=es-MX")
      .then((res) => {
        if (!res.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return res.json();
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Header></Header>
      <section className="bg-secondary">
        {data &&
          data.map((mapa) => {
            return (
              <div key={mapa.uuid}>
                <Button onPress={onOpen}>
                  <img src={mapa.listViewIcon} className="w-[100%]" alt="" />
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Modal Title
                        </ModalHeader>
                        <ModalBody>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam pulvinar risus non risus hendrerit
                            venenatis. Pellentesque sit amet hendrerit risus,
                            sed porttitor quam.
                          </p>
                          <p>
                            Magna exercitation reprehenderit magna aute tempor
                            cupidatat consequat elit dolor adipisicing. Mollit
                            dolor eiusmod sunt ex incididunt cillum quis. Velit
                            duis sit officia eiusmod Lorem aliqua enim laboris
                            do dolor eiusmod. Et mollit incididunt nisi
                            consectetur esse laborum eiusmod pariatur proident
                            Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                          </p>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Action
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            );
          })}
      </section>
      <Footer></Footer>
    </>
  );
};
