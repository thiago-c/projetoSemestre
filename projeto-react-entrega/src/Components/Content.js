import React from "react";

export default function Content({ id, title, text }) {
  return (
    <section id={id} className="w-full p-10">
      <h1 className="w-full justify-center text-center font-mono text-sm md:text-xl font-bold text-amber-900 dark:text-amber-100">
        {title}
      </h1>
      <p className="w-full justify-center text-center font-mono text-sm md:text-md font-light text-amber-900 dark:text-amber-100">
        {text}
      </p>
    </section>
  );
}
