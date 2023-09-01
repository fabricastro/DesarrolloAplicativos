import {Button} from "@nextui-org/react";

export const ButtonPrimary =({buttonName})=> {
  return (
    <Button color="primary" type="submit" className="px-10 text-xl py-6">
      {buttonName}
    </Button>
  );
}
