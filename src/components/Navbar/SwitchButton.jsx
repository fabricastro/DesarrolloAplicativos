import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const SwitchButton = ({handleMode}) => {
  return (
    <Switch
      onClick={handleMode}
      defaultSelected
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    >
      Dark mode
    </Switch>
  );
};
