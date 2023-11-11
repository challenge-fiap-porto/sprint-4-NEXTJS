import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import "./Nav.css"; 
function Nav() {
  return (
    <header>
      <Link href="/" className="logo"></Link> 
      <nav className="navbar">
        <Link href="/sobre">Sobre Nós</Link>
        <Link href="/ajuda">Ajuda</Link>
        <Link href="/duvidas">Dúvidas</Link>
        <Link href="/rm">RM</Link>
      </nav>
      <input
        className="search"
        type="text"
        name="pesquisar"
        id="idpesquisar"
        placeholder="Pesquisar"
      />
      <input className="button-search" type="button" />

      <SearchIcon className="search-icon" /> 
      <Link href="/entrar" className="sign-in">
        Entrar
      </Link>
    </header>
  );
}

export default Nav;