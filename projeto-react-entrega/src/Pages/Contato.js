import "./Styles/App.css";
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
          text={<>
          </>}
        />
      </Main>
    </div>
  );
}

export default Contato;
