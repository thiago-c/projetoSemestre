import "./Styles/App.css";
import React, { useContext } from "react";
import Main from "../Components/Main";
import Content from "../Components/Content";
import LoginForm from "../Components/LoginForm";
import LogoutButton from "../Components/LogoutButton";
import { UsersContext } from "../Contexts/UsersProvider";

function Login() {
  const UsrCtxt = useContext(UsersContext);
  if (UsrCtxt.authenticated) {
    return (
      <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
        <Main>
          <Content
            id="logoff"
            title="Logoff"
            text={
              <>
                <LogoutButton />
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
}

export default Login;
