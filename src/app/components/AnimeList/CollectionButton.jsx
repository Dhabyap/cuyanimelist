"use client";

import React, { useState } from "react";
const CollectionButton = ({ mal_id, user_email, anime_image, anime_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { mal_id, user_email, anime_image, anime_title };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.isCreated) {
      setIsCreated(true);
    }

    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary"> Berhasil di tambahkan ke Koleksi </p>
      ) : (
        <button onClick={handleCollection} className="px-2 py-1 bg-color-accent">
          Add To Collection
        </button>
      )}
    </>
  );
};

export default CollectionButton;
