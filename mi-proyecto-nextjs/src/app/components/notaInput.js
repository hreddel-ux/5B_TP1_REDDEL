"use client";

export default function NotaInput({ onChange, number }) {
    return (
        <div>
            
            <input type="number" onChange={(event) => onChange(event.target.value)}/>

            <h3>La nota es : {number}</h3>
        </div>
    );
}


