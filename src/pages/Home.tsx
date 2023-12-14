import { useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { BsChevronLeft, BsPencilSquare, BsAward } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { CiBookmarkCheck } from "react-icons/ci";
import { Banner, Content, Drawer, Navbar, Pages, Variety } from "../components";
import { arrayImages } from "../helpers";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [optionDrawerSelected, setOptionDrawerSelected] = useState(1);

  const onClickOptionDrawer = (option: number) => {
    setOptionDrawerSelected(option);
  };

  return (
    <>
      <div>
        <Navbar />
        <Banner />
      </div>

      <section className="mt-20">
        <div className="flex flex-col items-center justify-center w-4/5 m-auto md:w-4/5 gap-y-20">
          <h2 className="relative text-5xl text-center text-before">
            Caracteristicas
          </h2>
          <div className="flex flex-wrap justify-center w-full my-10 md:gap-x-8">
            <div className="flex flex-col w-full gap-4 mb-20 text-center lg:w-1/5 md:w-2/5 sm:w-1/2">
              <GrUserExpert className="mx-auto" color="#24c0c7" size={70} />
              <span className="text-4xl font-bold">400+</span>
              <h5 className="text-2xl">Experiencia Especializada</h5>
            </div>
            <div className="flex flex-col w-full gap-4 mb-16 text-center lg:w-1/5 md:w-2/5 sm:w-1/2">
              <CiBookmarkCheck className="mx-auto" color="#24c0c7" size={70} />
              <span className="text-4xl font-bold">∞</span>
              <h5 className="text-2xl">Adaptabilidad</h5>
            </div>
            <div className="flex flex-col w-full gap-4 text-center lg:w-1/5 md:w-2/5 sm:w-1/2">
              <BsPencilSquare className="mx-auto" color="#24c0c7" size={70} />
              <span className="text-4xl font-bold">700+</span>
              <h5 className="text-2xl">Servicios de Consultorios Integral</h5>
            </div>
            <div className="flex flex-col w-full gap-4 text-center lg:w-1/5 md:w-2/5 sm:w-1/2">
              <BsAward className="mx-auto" color="#24c0c7" size={70} />
              <span className="text-4xl font-bold">10+</span>
              <h5 className="text-2xl">Innovación Continua</h5>
            </div>
          </div>
        </div>
      </section>

      <Pages />

      <section className="flex items-center bg-[#2ed3ae] gap-x-8 px-10 mt-20 py-20 lg:py-0">
        <div>
          <img
            className="mb-[-55px] relative w-[50rem] lg:block hidden lg:pt-20 pt-0"
            src="/images/home-16.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center gap-11">
          <h2 className="text-4xl text-center text-white md:text-left md:text-5xl ">
            Optimized for Mobile Devices
          </h2>
          <div className="flex flex-col items-center md:flex-row gap-x-6 gap-y-6">
            <div className="w-9/12 md:w-1/2">
              <div className="flex flex-col items-center gap-2 sm:flex-row">
                <FaLaptop color="white" size={50} />
                <h5 className="text-xl font-bold text-white">
                  100% Responsive
                </h5>
              </div>
              <p className="mt-5 text-lg text-center text-white sm:text-left">
                Monstroid² is fully responsive and will adapt itself to any
                mobile or tablet device.
              </p>
            </div>
            <div className="w-9/12 md:w-1/2">
              <div className="flex flex-col items-center gap-2 sm:flex-row">
                <IoEyeSharp color="white" size={50} />
                <h5 className="text-xl font-bold text-white">Retina Ready</h5>
              </div>
              <p className="mt-5 text-lg text-center text-white sm:text-left">
                Monstroid² is Retina Ready and it guarantees that your website
                will always look perfect on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Variety />
      <Content />

      <button
        className="fixed bottom-0 right-0 z-50 p-2 m-auto text-black translate-x-0 bg-white shadow-lg -top-60 h-fit"
        onClick={() => setIsOpen(true)}
      >
        <BsChevronLeft className="sm:!text-[35px] text-[20px]" />
      </button>

      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col items-center justify-center gap-8 overflow-hidden">
          <button className="bg-[#2ed3ae] p-4 text-white font-bold">
            Button
          </button>

          <div className="flex gap-12 border-b border-[#ececee] w-full items-center justify-center">
            <button
              onClick={() => onClickOptionDrawer(1)}
              className={`${
                optionDrawerSelected === 1 && "text-[#2ed3ae]"
              } transition-all duration-300`}
            >
              All
            </button>
            <button
              onClick={() => onClickOptionDrawer(2)}
              className={`${
                optionDrawerSelected === 2 && "text-[#2ed3ae]"
              } transition-all duration-300`}
            >
              All 2
            </button>
            <button
              onClick={() => onClickOptionDrawer(3)}
              className={`${
                optionDrawerSelected === 3 && "text-[#2ed3ae]"
              } transition-all duration-300`}
            >
              All 3
            </button>
            <button
              onClick={() => onClickOptionDrawer(4)}
              className={`${
                optionDrawerSelected === 4 && "text-[#2ed3ae]"
              } transition-all duration-300`}
            >
              All 4
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 overflow-y-auto">
            {arrayImages.map(
              (image, index) =>
                optionDrawerSelected === image.section && (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-8 animate__animated animate__zoomIn animate__faster"
                  >
                    <div className="transition-all duration-300 shadow-md hover:shadow-2xl">
                      <img
                        src={image.src}
                        width={500}
                        height={500}
                        alt={image.name}
                      />
                    </div>
                    <span className="text-base">{image.name}</span>
                  </div>
                )
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}
