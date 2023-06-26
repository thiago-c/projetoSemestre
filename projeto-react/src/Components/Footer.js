import { Link } from "react-router-dom";
import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <footer className="flex bg-amber-300 dark:bg-amber-900 bottom-0 flex-wrap">
      <section className="w-full md:w-1/3 flex shrink-0 justify-center">
        <Content
          id="institucional"
          title="Institucional"
          text={
            <>
              <Link to="https://colomeu-dev.web.app/" className="p-3">
                <span className="text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100">
                  <i className="fa-solid fa-code"></i>
                </span>
              </Link>
              <br />
              Colomeu Dev
            </>
          }
        />
      </section>
      <section className="w-full md:w-1/3 flex shrink-0 justify-center">
        <Content
          id="contatos"
          title="Contatos"
          text={
            <>
              <Link to="mailto:colomeu.t95@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
              >
                <i className="fa-solid fa-at"></i> E-mail
              </Link>
              <br />
              <Link to="https://wa.me/5519989777292"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
              >
                <i className="fa-brands fa-whatsapp"></i> Whatsapp
              </Link>
            </>
          }
        />
      </section>
      <section className="w-full md:w-1/3 flex shrink-0 justify-center">
        <Content
          id="redes"
          title="Redes"
          text={
            <>
              <Link to="https://www.linkedin.com/in/thiago-colomeu-a5821a161"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </Link>
            </>
          }
        />
      </section>
      <section className="w-full flex shrink-0 justify-center">
        <Content
          id="assinatura"
          title="Assinatura"
          text={
            <>
              <p>Feito por Thiago Colomeu - Todos os direitos reservados</p>
            </>
          }
        />
      </section>
    </footer>
  );
}
