import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";

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

  const addFavorite = async (event) => {
    event.preventDefault();
    const fuid = event.target.uid.value;
    const fdid = event.target.did.value;
    let idDoc = "";
    const q = query(collection(db, "users"), where("idUser", "==", fuid));
    const querySnapshotFavorites = await getDocs(q);
    querySnapshotFavorites.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      idDoc = doc.id;
    });
    const docRef = doc(db, "users", idDoc);
    console.log(docRef);
    await updateDoc(docRef, {
      favorites: arrayUnion(fdid),
    });
  };

  return (
    <UsersContext.Provider
      value={{
        uid: uid,
        authenticated: authenticated,
        addFavorite: addFavorite,
        authUser: authUser,
        logoff: logoff,
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
