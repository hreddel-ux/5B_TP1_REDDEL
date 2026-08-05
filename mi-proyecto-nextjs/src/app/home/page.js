'use client'

import Historia from "../components/Historia";
import Publicacion from "../components/Publicacion";

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido al Sistema</h1>
      <p>Esta es la página principal de nuestra aplicación</p>
      <Historia></Historia>
      <Publicacion></Publicacion>
    </div>
  );
}
