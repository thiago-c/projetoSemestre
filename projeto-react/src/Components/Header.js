import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UsersContext } from "../Contexts/UsersProvider";

export default function Header() {
  const UsrCtxt = useContext(UsersContext);
  if (UsrCtxt.authenticated) {
    return (
      <header className="bg-amber-300 dark:bg-amber-900">
        <nav className="w-full mx-auto flex justify-center items-center flex-wrap">
          <Link to="/" className="p-3">
            <span className="text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100">
              <i className="fa-solid fa-home"></i>
            </span>
          </Link>
          <Link
            to="/sobre-o-projeto"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Sobre o Projeto
          </Link>
          <Link
            to="/diplomados"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Diplomados
          </Link>
          <Link
            to="/contato"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Contato
          </Link>
          <Link
            to="/favoritos"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Meus Favoritos
          </Link>
          <Link
            to="/cadastro-diplomado"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Cadastrar Diplomado
          </Link>
          <Link
            to="/login"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Logoff
          </Link>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="bg-amber-300 dark:bg-amber-900">
        <nav className="w-full mx-auto flex justify-center items-center flex-wrap">
          <Link to="/" className="p-3">
            <span className="text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100">
              <i className="fa-solid fa-home"></i>
            </span>
          </Link>
          <Link
            to="/sobre-o-projeto"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Sobre o Projeto
          </Link>
          <Link
            to="/diplomados"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Diplomados
          </Link>
          <Link
            to="/contato"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Contato
          </Link>
          <Link
            to="/login"
            className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
          >
            Login
          </Link>
        </nav>
      </header>
    );
  }
}
