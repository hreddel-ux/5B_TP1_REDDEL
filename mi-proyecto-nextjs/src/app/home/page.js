"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [alumno, setAlumno] = useState("");
  const [mostrarAyuda, setMostrarAyuda] = useState(false);

  
  useEffect(() => {
    document.title = "Pio Promedios - Inicio";
  }, []);

  useEffect(() => {
    console.log("El alumno cambió:", alumno);
  }, [alumno]);

  return (
    <main className={styles.pagina}>
      <div className={styles.columna}>
        <input
          className={styles.input}
          type="text"
          placeholder="Ingresá tu nombre"
          value={alumno}
          onChange={(event) => setAlumno(event.target.value)}
        />

        {alumno === "" ? (
          <p className={styles.mensaje}>
            Por favor, ingresá tu nombre para continuar.
          </p>
        ) : (
          <div className={styles.bienvenida}>
            <p>¡Hola, {alumno}!</p>
            <p>Podés ir a la calculadora en: http://localhost:3000/notas</p>
          </div>
        )}

        <button
          className={styles.boton}
          onClick={() => setMostrarAyuda(!mostrarAyuda)}
        >
          Mostrar/Ocultar ayuda
        </button>

        {mostrarAyuda && (
          <ul className={styles.ayuda}>
            <li>Ingresá tu nombre para ver la bienvenida.</li>
            <li>Andá a /notas para cargar y ver tus notas.</li>
            <li>Ahí podés agregar, eliminar y ver el promedio.</li>
          </ul>
        )}
      </div>
    </main>
  );
}