import NotaInput from "./notaInput";
import NotaItem from "./notaItem";
import styles from "./ListaNotas.module.css";

export default function ListaNotas({ notas, onAgregar, onEliminar }) {
  const items = [];
  for (let i = 0; i < notas.length; i++) {
    items.push(
      <NotaItem key={i} nota={notas[i]} indice={i} onEliminar={onEliminar} />
    );
  }

  let suma = 0;
  notas.forEach((n) => {
    suma += n;
  });
  const promedio = notas.length === 0 ? 0 : suma / notas.length;

  return (
    <div className={styles.lista}>
      <NotaInput onAgregar={onAgregar} />

      <p className={styles.promedio}>Promedio: {promedio.toFixed(2)}</p>

      {notas.length === 0 ? (
        <p className={styles.vacio}>No hay notas cargadas.</p>
      ) : (
        <ul className={styles.items}>{items}</ul>
      )}
    </div>
  );
}