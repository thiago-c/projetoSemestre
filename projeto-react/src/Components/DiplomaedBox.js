import React from "react";

export default function DiplomaedBox({
  id,
  image,
  title,
  text,
  birth_date,
  date_of_death,
}) {
  return (
    <section id={id} className="w-full p-5 flex flex-wrap">
      <div className="w-full md:w-2/3 p-4 flex-none">
        <img src={image} alt={"Fotografia de "+title}/>
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
