import "./Styles/App.css";
import React, { useContext, useState, useEffect, useRef } from "react";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import Diplomaed from "../Components/Diplomaed";
import DiplomaedGallery from "../Components/DiplomaedGallery";
import { UsersContext } from "../Contexts/UsersProvider";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

function Favoritos() {
  const UsrCtxt = useRef(useContext(UsersContext));
  const [favorites, favoritesSet] = useState([]);
  useEffect(() => {
    async function getFavorites() {
      const diplomados = [];
      var favorites = "";
      try {
        const q = query(
          collection(db, "users"),
          where("idUser", "==", UsrCtxt.current.uid)
        );
        const querySnapshotFavorites = await getDocs(q);
        querySnapshotFavorites.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          favorites = doc.data().favorites;
        });
        console.log(favorites);
        const querySnapshot = await getDocs(
          collection(db, "diplomaeds"), where(documentId(), 'in', [favorites])
        );
        querySnapshot.forEach((doc) => {
          diplomados.push({ id: doc.id, ...doc.data() });
        });
        favoritesSet(diplomados);
      } catch (error) {
        console.log("Error fetching collection: ", error);
      }
    }
    getFavorites();
  }, []);
  console.log(favorites);
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Banner />
        <Content
          id="favoritos"
          title="Favoritos"
          text={
            <>
              <DiplomaedGallery id="diplomados">
                {favorites.map((diplomado, i) => (
                  <Diplomaed
                    id={diplomado.id}
                    image={diplomado.image}
                    title={diplomado.name}
                    text={diplomado.bio}
                    birth_date={diplomado.birthDate}
                    date_of_death={diplomado.dateOfDeath}
                  />
                ))}
              </DiplomaedGallery>
            </>
          }
        />
      </Main>
    </div>
  );
}

export default Favoritos;
