import "./Styles/App.css";
import Main from "../Components/Main";
import Banner from "../Components/Banner";
import Content from "../Components/Content";
import Diplomaed from "../Components/Diplomaed";
import DiplomaedGallery from "../Components/DiplomaedGallery";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";

const diplomados = [];
try {
  const querySnapshot = await getDocs(collection(db, "diplomaeds"));
  querySnapshot.forEach((doc) => {
    diplomados.push({ id: doc.id, ...doc.data() });
  });
} catch (error) {
  console.log("Error fetching collection: ", error);
}

function Favoritos() {
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
                {diplomados.map((diplomado, i) => (
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
