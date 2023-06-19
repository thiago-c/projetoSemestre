import "./Styles/App.css";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";

function SobreProjeto() {
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Banner />
        <Content
          id="sobre-o-projeto"
          title="Sobre o Projeto"
          text={<>
          </>}
        />
      </Main>
    </div>
  );
}

export default SobreProjeto;
