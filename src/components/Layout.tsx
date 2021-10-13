import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
const Layout = ({ children }) => {
  const theme = 'light';
  return (
    <div data-theme={theme} className="h-full w-full text-white max-w-screen-lg">
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="flex-1 px-2 mx-2">
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href="/">
            <h1 className="text-lg font-bold cursor-pointer">Fábrica de arena para gatos</h1>
          </Link>
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-stretch">
            <Link href="/distribuidor">
              <a className="btn btn-ghost btn-sm rounded-btn">Distribuidor</a>
            </Link>
          </div>
        </div>
        <div className="flex-none lg:hidden">
          <button className="btn btn-square btn-ghost dropdown dropdown-end">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
              tabIndex={0}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg> */}
            <GiHamburgerMenu className="inline-block w-6 h-6 stroke-current" tabIndex={0} />
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-10"
            >
              <Link href="/distribuidor">
                <a className="uppercase">Distribuidor</a>
              </Link>
            </ul>
          </button>
        </div>
      </div>

      <main data-theme={theme} className="h-5/6">{children}</main>
    </div>
  );
};

export default Layout;
