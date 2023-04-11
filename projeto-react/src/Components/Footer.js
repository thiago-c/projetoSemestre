import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <footer className="flex bg-gray-300 dark:bg-gray-900 bottom-0">
      <section className="w-1/3 flex justify-center">
        <Content
          id="institucional"
          title="Institucional"
          text={
            <>
              <a href="/" className="p-3">
                <span className="text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100">
                  <i className="fa-solid fa-code"></i>
                </span>
              </a>
              <br />
              Colomeu Dev
            </>
          }
        />
      </section>
      <section className="w-1/3 flex justify-center">
        <Content
          id="contatos"
          title="Contatos"
          text={
            <>
              <a
                href="mailto:colomeu.t95@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
              >
                <i className="fa-solid fa-at"></i> E-mail
              </a>
              <br />
              <a
                href="https://wa.me/5519989777292"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
              >
                <i className="fa-brands fa-whatsapp"></i> Whatsapp
              </a>
            </>
          }
        />
      </section>
      <section className="w-1/3 flex justify-center">
        <Content
          id="redes"
          title="Redes"
          text={
            <>
              <a
                href="https://www.linkedin.com/in/thiago-colomeu-a5821a161"
                target="_blank"
                rel="noreferrer"
                className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-gray-900 dark:text-gray-100"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
            </>
          }
        />
      </section>
    </footer>
  );
}
