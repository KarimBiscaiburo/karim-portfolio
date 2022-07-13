import React from "react";
import "../sass/layout/_contacto.scss";

function Contacto() {
    return(
        <form action="https://formsubmit.co/kbiscaiburo@gmail.com" name="contacto" method="POST" className="formulario">
            <fieldset className="formulario__campos">
                <div className="campo">
                    <label className="info" htmlFor="nombre">Nombre</label>
                    <input id="formNombre" className="input__nombre" type="text" name="nombre" />
                </div>
                <div className="campo">
                    <label className="info" htmlFor="email">Email:</label>
                    <input id="formEmail" className="input__email" type="email" name="email"  />
                </div>
                <div className="campo">
                    <label className="info" htmlFor="mensaje">Mensaje:</label>
                    <textarea id="formMensage" className="input__mensaje" name="mensaje"></textarea>
                </div>
                <div className="campo input-enviar">
                    <button className="btn-enviar" type="submit">Enviar</button>
                </div>
            </fieldset>  
        </form>
    );
} 

export default Contacto;



