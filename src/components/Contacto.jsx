import React from "react";
import "../sass/layout/_contacto.scss";

function Contacto() {
    return(
        <form name="contacto" method="post" className="formulario" netlify>
            <ul className="formulario__lista">
                <li className="label">
                    <label className="label__info" htmlFor="nombre">Nombre</label>
                    <input className="input__nombre" type="text" name="nombre" />
                </li>
                <li className="label">
                    <label className="label__info" htmlFor="email">Email:</label>
                    <input className="input__email" name="email" type="email" />
                </li>
                <li className="label">
                    <label className="label__info" htmlFor="mensaje">Mensaje:</label>
                    <textarea className="input__mensaje" name="mensaje"></textarea>
                </li>
                <li className="input-enviar">
                    <input className="btn-enviar" type="submit" />
                </li>
            </ul>  
        </form>
    );
} 

export default Contacto;



