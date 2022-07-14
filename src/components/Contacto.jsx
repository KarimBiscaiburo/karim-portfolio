import React from "react";
import "../sass/layout/_contacto.scss";

function Contacto() {
    //En el formulario agregamos el atributo "onsubmit"
    async function enviarFormulario(e) {
        try {
            const resultado = await validarFormulario();
            if (!resultado){
                e.preventDefault();
                mostrarError();
            }

        } catch (error) {
            console.log(error);
        } 
    }

    function validarFormulario () {
        const nombre = document.querySelector("#formNombre").value;
        const email = document.querySelector("#formEmail").value;
        const mensaje = document.querySelector("#formMensaje").value;

        if (nombre !== "" && email !== "" && mensaje !== "") {
            return true;
        } else{
            return false;
        }
    }

    function mostrarError() {
        //Selecciono elementos
        const fieldset = document.querySelector("#fieldset");
        const btnEnviar = document.querySelector("#enviar");

        //Creo el mensaje que se va a agregar
        const mensaje = document.createElement("div");
        mensaje.classList.add("campo", "mensaje");

        const texto = document.createElement("p");
        texto.textContent = "Todos los campos son obligatorios";

        //Agrego
        mensaje.appendChild(texto);
        fieldset.appendChild(mensaje);
        btnEnviar.disabled = true;
        
        //Elimino
        setTimeout(() => {
            mensaje.remove();
            btnEnviar.disabled = false;
        }, 2500);
    }

    return(
        <form onSubmit={enviarFormulario} action="https://formsubmit.co/kbiscaiburo@gmail.com" name="contacto" method="POST" className="formulario">
            <fieldset id="fieldset" className="formulario__campos">
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
                    <textarea id="formMensaje" className="input__mensaje" name="mensaje"></textarea>
                </div>
                <div className="campo input-enviar">
                    <button id="enviar" className="btn enviar" type="submit">Enviar</button>
                </div>
            </fieldset>  
        </form>
    );
} 

export default Contacto;



