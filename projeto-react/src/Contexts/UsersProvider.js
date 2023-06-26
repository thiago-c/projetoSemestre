import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";

export const UsersContext = React.createContext();

const UsersProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [uid, setUID] = useState(false);

  const authUser = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado com sucesso", user);
        setAuthenticated(true);
        setUID(user.uid);
      })
      .catch((error) => {
        console.log("Problemas ao logar usuário", error);
        setAuthenticated(false);
      });
  };

  const logoff = (event) => {
    event.preventDefault();
    setAuthenticated(false);
  };

  return (
    <UsersContext.Provider
      value={{
        uid: uid,
        authenticated: authenticated,
        authUser: authUser,
        logoff: logoff,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
