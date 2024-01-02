"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonHapus = ({ id, endpoint }) => {
  const router = useRouter();

  const HandleHapusComment = async (id) => {
    const data = { id };

    const response = await fetch("/api/v1/" + endpoint, {
      method: "DELETE",
      body: JSON.stringify(data),
    });
    const deleted = await response.json();

    if (deleted.isCreated) {
      alert("DELETE SUCCESS");
      router.refresh();
    } else {
      alert("DELETE FAILEDD");
      router.refresh();
    }
  };
  return (
    <button onClick={() => HandleHapusComment(id)} style={{ backgroundColor: "rgb(220, 38, 38)", color: "white", fontWeight: "bold", padding: "10px 20px", marginTop: "3px", borderRadius: "10%" }}>
      HAPUS
    </button>
  );
};

export default ButtonHapus;
