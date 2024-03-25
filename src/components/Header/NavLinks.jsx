import React from "react";
import { LinkStyled, NavLink, NavLinksStyled } from "./Header.styled";
import { useMediaQuery } from "react-responsive";

const NavLinks = ({ setIsOpenMenu }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const onClick = () => {
    if (!isMobile) return;
    setIsOpenMenu(false);
  };
  return (
    <NavLinksStyled>
      <NavLink>
        <LinkStyled to="team_info" onClick={onClick} smooth={true}>
          Команда
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="choose_first" onClick={onClick} smooth={true}>
          Проекти
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="contact_us" onClick={onClick} smooth={true}>
          Контакти
        </LinkStyled>
      </NavLink>
      <NavLink>
        <LinkStyled to="contacts" onClick={onClick} smooth={true}>
          Контент
        </LinkStyled>
      </NavLink>
    </NavLinksStyled>
  );
};

export default NavLinks;
