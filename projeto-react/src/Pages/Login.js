import "./Styles/App.css";
import Main from "../Components/Main";
import Content from "../Components/Content";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Content
          id="login"
          title="Login"
          text={
            <>
              <LoginForm />
            </>
          }
        />
      </Main>
    </div>
  );
}

export default Login;
