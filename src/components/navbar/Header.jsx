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
import { TbBrandValorant } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <NavbarItem>
            <TbBrandValorant size={40} />
          </NavbarItem>
          <NavbarBrand>
            <p className="text-[32px] font-bold text-inherit">ValorantWiki</p>
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
          <NavbarMenuItem className="align-middle">
            <a
              href="https://github.com/MatiCastr0"
              className="inline-flex hover:text-primary "
            >
              Matias Castro <AiFillGithub className="px-1" size={30} />
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem className="align-middle">
            <a
              href="https://github.com/fabricastro"
              className="inline-flex hover:text-primary "
            >
              Fabricio Castro <AiFillGithub className="px-1" size={30} />
            </a>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};
