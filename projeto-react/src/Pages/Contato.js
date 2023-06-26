import "./Styles/App.css";
import { Link } from "react-router-dom";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";

function Contato() {
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Banner />
        <Content
          id="contato"
          title="Contato"
          text={
            <>
              <>
                <Link
                  to="mailto:colomeu.t95@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
                >
                  <i className="fa-solid fa-at"></i> E-mail
                </Link>
                <br />
                <Link
                  to="https://wa.me/5519989777292"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 h-fit font-mono text-sm md:text-xl font-light hover:font-bold text-amber-900 dark:text-amber-100"
                >
                  <i className="fa-brands fa-whatsapp"></i> Whatsapp
                </Link>
              </>
            </>
          }
        />
      </Main>
    </div>
  );
}

export default Contato;
