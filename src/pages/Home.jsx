import React from "react";

function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden bg-[url(/hero/hero.jpg)] bg-cover bg-bottom h-full pt-4  font-helvetica text-white">
        <div className=" flex items-center justify-between px-20 ">
          <h1 className=" bg-gradient-to-r from-[#F76D43] to-[#928606] bg-clip-text text-5xl font-extrabold text-transparent">
            NatureNest
          </h1>
          <ul className="flex gap-12 p-2 text-xl font-semibold text-amber-500">
            <li className="hover:border px-4 py-2 hover:rounded-xl hover:bg-amber-500/30 transition duration-300 ease-in-out text-shadow-lg ">
              Classes
            </li>
            <li className="hover:border px-4 py-2 hover:rounded-xl hover:bg-amber-500/30 transition duration-300 ease-in-out text-shadow-lg">
              Journey
            </li>
            <li className="hover:border px-4 py-2 hover:rounded-xl hover:bg-amber-500/30 transition duration-300 ease-in-out text-shadow-lg">
              Club
            </li>
            <li className="hover:border px-4 py-2 hover:rounded-xl hover:bg-amber-500/30 transition duration-300 ease-in-out text-shadow-lg">
              About{" "}
            </li>
            <li className="hover:border px-4 py-2 hover:rounded-xl hover:bg-amber-500/30 transition duration-300 ease-in-out text-shadow-lg">
              Contact
            </li>
          </ul>
        </div>
        <div className="w-full absolute bottom-[5%] flex items-center justify-between px-20">
          <div className="w-2/3">
            <h1 className="text-shadow-lg tracking-wide  text-7xl font-helveticaRoundedBold text-red-600 ">
              Pack your bag let's go somewhere amazing
            </h1>

            <p className="pt-4 text-shadow-lg/30 text-2xl tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              autem officiis adipisci placeat earum eum eius iusto quia ab, odio
              rem rerum quo eveniet ducimus! Cumque voluptatem quisquam alias
              voluptatum tempora nulla autem suscipit. Necessitatibus quos neque
              veritatis corrupti possimus ea aliquam. Modi aliquid dolor sint
              architecto, voluptatibus ex aspernatur!
            </p>
          </div>
          <div className="">
            <button className=" shadow-xl mt-[16.5rem] text-lg bg-white text-black px-8 py-2 rounded-xl tracking-wider hover:bg-black hover:text-white transition duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
