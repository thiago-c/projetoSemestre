import "./Styles/App.css";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import DiplomaedBox from "../Components/DiplomaedBox";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { useState, useEffect } from "react";

function Detalhe({ params }) {
  const id = useParams().id;
  const [diplomado, diplomadoSet] = useState("");

  useEffect(() => {
    async function getDiplomaed() {
      try {
        const docSnap = await getDoc(doc(db, "diplomaeds", id));
        if (docSnap.exists()) {
          var diplomado = docSnap.data();
          diplomadoSet(diplomado);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error fetching collection: ", error);
      }
    }
    getDiplomaed();
  }, []);
  console.log(diplomado);
  return (
    <div className="App items-top min-h-screen bg-amber-100 dark:bg-amber-700 sm:items-center sm:pt-0">
      <Main>
        <Banner />
        <Content
          id={"detalhe_" + params().id}
          title="Detalhes do diplomado"
          text={
            <>
              <DiplomaedBox
                id={params().id}
                image={diplomado.image}
                title={diplomado.name}
                text={diplomado.fullBio}
                birth_date={diplomado.birthDate}
                date_of_death={diplomado.dateOfDeath}
              />
            </>
          }
        />
      </Main>
    </div>
  );
}

export default Detalhe;
