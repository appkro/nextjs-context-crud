import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Home() {
  return (
    <Layout>
      <Image
        src="https://arenaparagato.com/assets/images/petclean/image_distri.svg"
        alt="Picture of the author"
        width={1536}
        height={600}
      />
      <p className="px-32 py-14 text-2xl text-justify">
        Contamos con más de 12 años de experiencia en la fabricación y
        comercializacion de arena para gatos, elaborada con minerales naturales
        de alta calidad.
      </p>
      <p className="px-32 pt-0.5 text-2xl text-justify">
        Damos la opción de distribuir nuestras marcas Mistikat / Petclean, o
        fabricar bajo una nueva marca para que desarrolle su propio mercado.
        Nuestra capacidad de producción nos permite atender requerimientos de
        altos volumenes.
      </p>
      <h1 className="px-32 pt-16 text-center text-5xl">
        PONGASE EN CONTACTO CON NOSOTROS
      </h1>
      <form action="" className="px-64 pt-16">
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered"
          />
        </div>
        <select className="select select-bordered w-full my-2">
          <option disabled selected>
            Normal
          </option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </select>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered"
          />
        </div>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered"
          />
        </div>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered"
          />
        </div>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered"
          />
        </div>
      </form>
    </Layout>
  );
}

export default Home;
