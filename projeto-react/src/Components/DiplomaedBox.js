import React, { useContext } from "react";
import { UsersContext } from "../Contexts/UsersProvider";

export default function DiplomaedBox({
  id,
  image,
  title,
  text,
  birth_date,
  date_of_death,
}) {
  const UsrCtxt = useContext(UsersContext);
  if (UsrCtxt.authenticated) {
    return (
      <section id={id} className="w-full p-5 flex flex-wrap">
        <div className="w-full md:w-2/3 p-4 flex-none">
          <img src={image} alt={"Fotografia de " + title} />
        </div>
        <div className="w-full md:w-1/3 p-4 flex-none flex flex-wrap">
          <div className="self-center">
            <form onSubmit={UsrCtxt.addFavorite}>
              <input type="hidden" name="uid" value={UsrCtxt.uid} />
              <input type="hidden" name="did" value={id} />
              <input
                className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Favoritar"
              />
            </form>
            <br />
            <br />
            <br />
            <br />
            <h3 className="w-full justify-center text-center font-mono text-sm md:text-base font-bold text-amber-900 dark:text-amber-100">
              {title}
            </h3>
            <br />
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {text}
            </p>
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {birth_date}
            </p>
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {date_of_death}
            </p>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id={id} className="w-full p-5 flex flex-wrap">
        <div className="w-full md:w-2/3 p-4 flex-none">
          <img src={image} alt={"Fotografia de " + title} />
        </div>
        <div className="w-full md:w-1/3 p-4 flex-none flex flex-wrap">
          <div className="self-center">
            <h3 className="w-full justify-center text-center font-mono text-sm md:text-base font-bold text-amber-900 dark:text-amber-100">
              {title}
            </h3>
            <br />
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {text}
            </p>
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {birth_date}
            </p>
            <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
              {date_of_death}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
