import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Distribuidor() {
  return (
    <Layout>
      <Image
        src="https://arenaparagato.com/assets/images/petclean/image_distri.svg"
        alt="Picture of the author"
        width={1536}
        height={600}
        className="z-0"
      />
      <p className="px-8 lg:px-40 md:px-32 py-14 text-xl lg:text-2xl text-justify text-black">
        Contamos con más de 12 años de experiencia en la fabricación y
        comercializacion de arena para gatos, elaborada con minerales naturales
        de alta calidad.
      </p>
      <p className="px-8 lg:px-40 md:px-32 pt-0.5 text-xl lg:text-2xl text-justify text-black">
        Damos la opción de distribuir nuestras marcas Mistikat / Petclean, o
        fabricar bajo una nueva marca para que desarrolle su propio mercado.
        Nuestra capacidad de producción nos permite atender requerimientos de
        altos volumenes.
      </p>
      <h1 className="px-8 lg:px-40 md:px-32 pt-16 text-center font-bold text-xl lg:text-5xl text-black">
        PONGASE EN CONTACTO CON NOSOTROS
      </h1>
      <form action="" className="px-8 lg:px-64 md:px-32 pt-16 w-full">
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Nombre"
            className="input input-bordered text-gray-500"
          />
        </div>
        <select className="select select-bordered w-full my-2 text-gray-500">
          <option disabled selected>
            Seleccione País
          </option>
          <option>telekinesis</option>
          <option>time travel</option>
          <option>invisibility</option>
        </select>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Empresa"
            className="input input-bordered text-gray-500"
          />
        </div>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Teléfono"
            className="input input-bordered text-gray-500"
          />
        </div>
        <div className="form-control py-2">
          <input
            type="text"
            placeholder="Página Web"
            className="input input-bordered text-gray-500"
          />
        </div>

        <div className="">
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                type="radio"
                name="opt"
                defaultChecked={true}
                className="radio"
                value=""
              />
              <span className="label-text pl-7">Mistikat</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                type="radio"
                name="opt"
                defaultChecked={true}
                className="radio"
                value=""
              />
              <span className="label-text pl-7">Petclean</span>
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label justify-start">
              <input
                type="radio"
                name="opt"
                defaultChecked={true}
                className="radio"
                value=""
              />
              <span className="label-text pl-7 ">Marca Propia</span>
            </label>
          </div>
        </div>
        <div className="form-control py-2">
          <textarea
            className="textarea h-24 textarea-bordered text-gray-500"
            placeholder="Comentario"
          ></textarea>
        </div>
        <div className="flex justify-center py-10">
          <button className="btn btn-primary w-32">Enviar</button>
        </div>
      </form>
    </Layout>
  );
}

export default Distribuidor;
