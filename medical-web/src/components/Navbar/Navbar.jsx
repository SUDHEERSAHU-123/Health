import React from "react";
import Logo from "../../assets/Logo.jpg";

const Menu = [
  { id: 1, name: "About", link: "/#" },
  { id: 2, name: "Artical", link: "/#services" },
  { id: 3, name: "Podcast", link: "/#" },
  { id: 4, name: "Contact", link: "/#" },
  { id: 5, name: "Services", link: "/#" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Tranquil
            </a>
          </div>
          <ul className="flex items-center gap-8">
            {Menu.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="inline-block px-4 hover:text-blue-500 duration-200">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <button className="bg-slate-100 text-black-bold py-2 px-8 rounded-full border border-black flex items-center">
              <span>Login</span>
              <div className="bg-white ml-4 rounded-full px-4 py-1 border border-black">Sign up</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


