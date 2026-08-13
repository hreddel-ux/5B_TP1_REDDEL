"use client";

export default function NotaInput({ onChange, text }) {
    return (
        <div>
            
            <input type="text"/>

            <h3>La nota dice : {text}</h3>
        </div>
    );
}