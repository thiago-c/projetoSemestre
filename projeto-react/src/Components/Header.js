import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-300 dark:bg-gray-900">
      <nav className="w-full mx-auto flex justify-center items-center">
        <Link to="/" className="p-3">
          <span className="text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100">
            <i className="fa-solid fa-code"></i>
          </span>
        </Link>
        <Link
          to="/sobre-o-projeto"
          className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
        >
          Sobre o Projeto
        </Link>
        <Link
          to="/diplomados"
          className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
        >
          Diplomados
        </Link>
        <Link
          to="/contato"
          className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
