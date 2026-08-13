"use client";

import { useState } from "react"; 
import NotaInput from "@/app/components/notaInput";

export default function NotasPage() {
    const [nota, setNota] = useState("");

    const modificarNota = (nuevaNota) => {
        setNota(nuevaNota);
    };

    return (
        <main>
            <NotaInput onChange={modificarNota} text={nota} />
        </main>
    );
}