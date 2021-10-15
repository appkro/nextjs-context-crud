import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";

import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Home() {
  return (
    <Layout>
      <Image
        src="https://arenaparagato.com/assets/images/principal/mujerYgato.png"
        alt="Picture of the author"
        width={1536}
        height={600}
        className="z-0"
      />
      <p className="px-8 lg:px-20 md:px-32 py-14 text-xl lg:text-2xl text-justify text-black">
        Somos una empresa ecuatoriana lider en producción y comercialización de
        arena para gato con las mejores materias primas naturales que eliminan
        eficazmente el mal olor y ofrece una alta capacidad de absorción.
      </p>
      <h1 className="px-8 lg:px-40 md:px-32 py-16 text-center text-xl lg:text-4xl text-yellow-500">
        Nuestras Marcas
      </h1>
      <div className="grid grid-cols-2 gap-6 px-8 lg:px-20 md:px-20">
        <Image
          src="https://arenaparagato.com/assets/images/mistikat.svg"
          alt="Picture of the author"
          width={450}
          height={87}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/petclean.svg"
          alt="Picture of the author"
          width={436}
          height={77}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images//principal/funda_mistikat.svg"
          alt="Picture of the author"
          width={570}
          height={520}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images//principal/funda_petclean.svg"
          alt="Picture of the author"
          width={410}
          height={520}
          className="z-0"
        />
      </div>
      <h1 className="px-8 lg:px-40 md:px-32 py-16 text-center text-xl lg:text-4xl text-yellow-500">
        Nuestros Clientes
      </h1>
      <div className="grid grid-cols-3 gap-12 px-8 py-16 lg:px-60 md:px-36">
        <Image
          src="https://arenaparagato.com/assets/images/mistikat/logomi-comisariato.png"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/mistikat/logoaki.png"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/principal/supermaxi.svg"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/mistikat/logodelportal.png"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/principal/coral.svg"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
        <Image
          src="https://arenaparagato.com/assets/images/principal/tuti.svg"
          alt="Picture of the author"
          width={100}
          height={100}
          className="z-0"
        />
      </div>
    </Layout>
  );
}

export default Home;
