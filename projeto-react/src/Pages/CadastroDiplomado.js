import "./Styles/App.css";
import React, { useContext } from "react";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import DiplomaedRegistrationForm from "../Components/DiplomaedRegistrationForm";
import { UsersContext } from "../Contexts/UsersProvider";

function CadastroDiplomado() {
  const UsrCtxt = useContext(UsersContext);
  if (UsrCtxt.authenticated) {
    return (
      <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
        <Main>
          <Banner />
          <Content
            id="cadastro_diplomado"
            title="Cadastro de Diplomado"
            text={
              <>
                <DiplomaedRegistrationForm />
              </>
            }
          />
        </Main>
      </div>
    );
  } else {
    return (
      <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
        <Main>
          <Banner />
          <Content
            id="cadastro_diplomado"
            title="Cadastro de Diplomado"
            text={<>Não autorizado</>}
          />
        </Main>
      </div>
    );
  }
}

export default CadastroDiplomado;
