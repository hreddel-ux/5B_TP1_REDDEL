"use client"

import styles from "@/app/Home.module.css"

export default function HomePage() {
    return (
        <div>
            <h1 className={styles.mensaje}>Bienvenido al Sistema</h1>
            <p>Esta es la página principal de nuestra aplicación</p>
        </div>
    );
}