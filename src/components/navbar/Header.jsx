import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
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

        <NavbarBrand>
          <TbBrandValorant size={40} />
          <Link to="/home">
            <p className="text-[32px] font-bold text-inherit">ValorantWiki</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          <NavbarItem>
            <Link to="/home">Agentes</Link>
          </NavbarItem>
          <NavbarItem className="pl-3">
            <Link to="/maps">Mapas</Link>
          </NavbarItem>
          <NavbarItem className="pl-3">
            <Link to="/weapons">Armas</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link to="/">
              <Button color="warning" variant="flat">
                Cerrar Sesión
              </Button>
            </Link>
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
