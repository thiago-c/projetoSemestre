import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header className="bg-amber-300 dark:bg-amber-900">
      <nav className="w-full mx-auto flex justify-center items-center">
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
      </nav>
    </header>
  );
}
