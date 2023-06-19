import React from "react";

export default function DiplomaedGallery({ id, children }) {
    return (
        <section
            id={id}
            className="w-full mx-auto bg-amber-200 dark:bg-amber-800 flex flex-wrap"
        >
            {children}
        </section>
    );
}
