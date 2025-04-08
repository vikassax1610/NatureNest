import React, { useState } from "react";
import menu from "/icons/menu.svg";
import x from "/icons/x.svg";
function Home() {
  const [open, setOpen] = useState(false);
  const navItems = ["Classes", "Journey", "Club", "About", "Contact"];
  const handleMenuClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full  bg-[url(/hero/hero.jpg)] bg-cover bg-bottom font-helvetica text-white ">
        <div className=" flex items-center  justify-between md:px-24 md:pt-4">
          <h1 className="text-white border-b-4 md:text-5xl text-3xl text-shadow-lg text-shadow-gray-950 font-extrabold ml-4 mt-2 ">
            NatureNest
          </h1>
          <div className="md:hidden mr-4 mt-2">
            {" "}
            <button className=" " onClick={handleMenuClick} type="button">
              <img src={menu} alt="" className="size-10" />
            </button>
          </div>
          {open && (
            <div className="md:hidden absolute flex  items-start w-full h-full top-0 bg-black ">
              <ul className=" flex text-2xl flex-col items-center mt-[8rem] ml-[1.5rem] gap-8 w-full ">
                <li className="">Classes</li>
                <li className=""> Journey</li>
                <li className=""> Club</li>
                <li className=""> About </li>
                <li className=""> Contact</li>
              </ul>
              <button onClick={handleMenuClick} className="p-4">
                <img src={x} alt="" className="size-10" />
              </button>
            </div>
          )}
          <ul className="md:flex gap-12 text-xl font-semibold text-white hidden md:block">
            <li className="hover:border-white px-4 py-2 border border-transparent rounded-xl hover:bg-white/20 hover:text-black transition duration-300 ease-in-out text-shadow-lg ">
              Classes
            </li>
            <li className="hover:border-white px-4 py-2 border border-transparent rounded-xl hover:bg-white/20 hover:text-black transition duration-300 ease-in-out text-shadow-lg ">
              Journey
            </li>
            <li className="hover:border-white px-4 py-2 border border-transparent rounded-xl hover:bg-white/20 hover:text-black transition duration-300 ease-in-out text-shadow-lg ">
              Club
            </li>
            <li className="hover:border-white px-4 py-2 border border-transparent rounded-xl hover:bg-white/20 hover:text-black transition duration-300 ease-in-out text-shadow-lg ">
              About{" "}
            </li>
            <li className="hover:border-white px-4 py-2 border border-transparent rounded-xl hover:bg-white/20 hover:text-black transition duration-300 ease-in-out text-shadow-lg ">
              Contact
            </li>
          </ul>
        </div>
        <div className="w-full md:mt-[22rem] p-2 mt-[4rem] px-4 flex items-center md:flex-row flex-col md:justify-between md:px-20">
          <div className="md:w-2/3 w-full ">
            <h1 className=" tracking-wide  text-3xl md:text-6xl font-helveticaRoundedBold text-black text-shadow-sm text-shadow-white ">
              Pack your bag let's go somewhere amazing
            </h1>

            <p className="pt-4 text-shadow-lg/30 md:text-xl text-sm sm:text-lg  tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              autem officiis adipisci placeat earum eum eius iusto quia ab, odio
              rem rerum quo eveniet ducimus! Cumque voluptatem quisquam alias
              voluptatum tempora nulla autem suscipit. Necessitatibus quos neque
              veritatis corrupti possimus ea aliquam. Modi aliquid dolor sint
              architecto, voluptatibus forget your ex !
            </p>
          </div>
          <div className="">
            <button className=" shadow-xl md:mt-[10rem] mt-[2rem] text-lg bg-white text-black px-8 py-2 rounded-xl tracking-wider hover:bg-black hover:text-white transition duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:items-start md:flex-row  pl-1 pr-1 flex-col  w-full md:justify-between md:pl-16 md:pr-8 mt-4 md:mt-8 font-serif">
        <h1 className="text-5xl w-1/2 hidden md:block  text-gray-900 text-shadow-lg font-bold">
          Your next favorite <br />
          place awaits
        </h1>
        <h1 className="text-2xl w-full mb-2 md:hidden block text-gray-900 text-shadow-lg font-bold">
          Your next favorite place awaits
        </h1>
        <div className="md:p-4">
          <p className=" hidden md:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            suscipit quod <br /> odit? Sint excepturi laudantium inventore
            maiores eligendi eos earum.
          </p>
          <p className=" md:hidden block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            suscipit quod odit? Sint excepturi laudantium inventore maiores
            eligendi eos earum.
          </p>
          <button className="mt-4 shadow-xl text-lg bg-black text-white px-8 py-1 rounded-xl tracking-wider hover:bg-white hover:text-black hover:border transition duration-300 ease-in-out">
            Save all
          </button>
        </div>
      </div>
      <div className="w-full md:pl-16 font-helvetica mt-4 flex flex-col md:flex-row gap-4 px-2 md:pr-8 md:mt-8">
        <div className="bg-[url(/gallery/p1.jpg)] rounded-2xl w-[370px] h-[290px] md:w-[500px]  md:h-[300px] pl-8 bg-cover flex items-start flex-col justify-between">
          <button className="mt-4 shadow-xl text-lg  px-8 py-1 rounded-full tracking-wider bg-white text-black hover:border transition duration-300 ease-in-out">
            Explore
          </button>     
          <h1 className="text-3xl text-semibold text-white">Japan</h1>
        </div>
        <div className="bg-[url(/gallery/p4.jpg)] rounded-2xl w-[370px] h-[290px] md:w-[500px]  md:h-[300px]  pl-8 bg-cover flex items-start flex-col justify-between">
          <button className="mt-4 shadow-xl text-lg  px-8 py-1 rounded-full tracking-wider bg-white text-black hover:border transition duration-300 ease-in-out">
            Explore
          </button>
          <h1 className="text-3xl text-semibold text-white">India</h1>
        </div>
        <div className="bg-[url(/gallery/p3.jpg)] rounded-2xl w-[370px] h-[290px] md:w-[500px]  md:h-[300px]  pl-8 bg-cover flex items-start flex-col justify-between">
          <button className="mt-4 shadow-xl text-lg  px-8 py-1 rounded-full tracking-wider bg-white text-black hover:border transition duration-300 ease-in-out">
            Explore
          </button>
          <h1 className="text-3xl text-semibold text-white">UAE</h1>
        </div>
        <div className="bg-[url(/gallery/p2.jpg)] rounded-2xl w-[370px] h-[290px] md:w-[500px]  md:h-[300px]  pl-8 bg-cover flex items-start flex-col justify-between">
          <button className="mt-4 shadow-xl text-lg  px-8 py-1 rounded-full tracking-wider bg-white text-black hover:border transition duration-300 ease-in-out">
            Explore
          </button>
          <h1 className="text-3xl text-semibold text-white">Canada</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
