import React from "react";
import Style from "./Form.module.css";

export default function index() {
  return (
    <section className="w-full bg-green-light pb-20 py-6 px-5">
      <form action="" id="contact" method="POST" className={Style.form}>
        <div className={Style.formContent}>
          <h2 className={Style.title}>Hablemos</h2>
          <p>
            Si está interesado en trabajar conmigo en su próximo proyecto, no
            dude en ponerse en contacto conmigo.
          </p>
          <label forHtml="form-name">
            Nombre Completo
            <input
              required
              name="name"
              id="form-name"
              type="text"
              placeholder="Escribe tu nombre"
            />
          </label>
          <label forHtml="form-name">
            Correo electrónico
            <input
              required
              name="email"
              id="form-name"
              type="email"
              placeholder="Escribe tu correo electronico"
            />
          </label>
          <label forHtml="form-name">
            Mensaje
            <textarea
              required
              name="message"
              placeholder="Cuentamelo todo "
              id="form-message"
              cols="30"
              rows="7"
            ></textarea>
          </label>
          <button className={Style.button} type="submit">
            Enviar mensaje
          </button>
        </div>
      </form>
    </section>
  );
}
