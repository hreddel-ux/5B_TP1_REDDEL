"use client";

import { useState } from "react";
import styles from "./NotaInput.module.css";

export default function NotaInput({ onAgregar }) {
  const [nota, setNota] = useState("");

  const esInvalida = nota === "" || Number(nota) < 0 || Number(nota) > 10;

  const handleAgregar = () => {
    onAgregar(Number(nota)); 
    setNota(""); 
  };

  return (
    <div className={styles.contenedorInput}>
      <input type="number" className={styles.input} value={nota} onChange={(event) => setNota(event.target.value)}/>

      {esInvalida && (<p className={styles.error}>Ingresá una nota entre 0 y 10.</p>)}

      <button
        className={styles.boton}
        onClick={handleAgregar}
        disabled={esInvalida}
      >
        Agregar nota
      </button>
    </div>
  );
}