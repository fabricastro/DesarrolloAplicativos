import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarContent className="pr-3 sm:hidden" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ValorantWiki</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarBrand>
            <p className="font-bold text-inherit">ValorantWiki</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="warning" href="/" variant="flat">
              Cerrar Sesión
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem></NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
