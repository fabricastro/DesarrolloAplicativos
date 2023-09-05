/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const ButtonPrimary = ({ buttonName }) => {
  return (
    <Button color="primary" type="submit" className="px-10 py-6 text-xl">
      {buttonName}
      <BsFillArrowRightCircleFill />
    </Button>
  );
};
