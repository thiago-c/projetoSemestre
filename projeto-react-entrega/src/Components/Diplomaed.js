import { Link } from "react-router-dom";
import React from "react";

export default function Diplomaed({ id, image, title, text, birth_date, date_of_death }) {
    return (
        <section id={id} className="w-full md:w-1/3 p-5 flex-none">
            <div className="p-3 bg-amber-100 dark:bg-amber-700">
                <Link to={"/detalhe/" + id}>
                    <div className="w-full p-4">
                        <img src={image} alt={"Fotografia de "+title}/>
                    </div>
                    <h3 className="w-full justify-center text-center font-mono text-sm md:text-base font-bold text-amber-900 dark:text-amber-100">
                        {title}
                    </h3>
                    <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
                        {text}
                    </p>
                    <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
                        {birth_date}
                    </p>
                    <p className="w-full justify-center text-center font-mono text-xs md:text-sm font-light text-amber-900 dark:text-amber-100">
                        {date_of_death}
                    </p>
                </Link>
            </div>
        </section>
    );
}
