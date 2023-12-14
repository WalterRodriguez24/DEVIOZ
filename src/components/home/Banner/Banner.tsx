import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./Banner.module.css";
import "swiper/css";
import "swiper/css/navigation";

export const Banner = () => {
  return (
    <section
      className="section swiper-container swiper-slider"
      id="home"
      data-loop="false"
      data-simulate-touch="false"
      data-autoplay="false"
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="swiper-container swiper-wrapper"
      >
        <SwiperSlide>
          <div
            className={`${styles.swiper_slide_custom} flex justify-center items-center !h-[75vh] md:!h-[75vh] lg:!h-[95vh] xl:h-[30vh] 2xl:h-[60vh] `}
          >
            <div className={styles.bg_slide_1}></div>
            <div
              className={`${styles.grid_custom} grid items-center justify-between h-full px-2 pt-20 mx-auto sm:px-10 cus:grid-cols-2 gap-y-10 w-[100%] cus:w-full sm:w-[80%] md:w-[75%]`}
            >
              {/* Contenido informacion */}
              <div className="flex flex-col items-center justify-center w-full h-full col-span-1 gap-4 px-20 mt-8 animate__animated animate__fadeInUp cus:items-start">
                <h5 className="text-[#2ed3ae] text-3xl lg:text-left text-center">
                  SOMOS
                </h5>
                <h1 className="text-5xl font-bold text-center text-white lg:text-left">
                  DEVIOZ
                </h1>
                <p className="hidden text-center text-white lg:block cus:text-left">
                  Elevando el Potencial de tu Empresa de la mano con nosotros.
                  <br />
                  Soluciones inteligentes para empresas exitosas.
                </p>
                <button
                  type="button"
                  className="px-12 py-5 mt-4 mb-2 text-sm font-medium text-white transition-all duration-300 bg-transparent border border-white hover:bg-white focus:outline-none focus:ring-4 hover:text-black"
                >
                  VER MAS
                </button>
              </div>

              <div className="relative top-0 right-0 z-30 flex flex-col items-end justify-end h-full">
                <div className="right-0 flex items-center justify-center pointer-events-none">
                  <div className="relative top-0 right-0 z-0 w-full h-full">
                    {/* Laptop */}
                    <img
                      className="w-full h-full "
                      src="/images/home-slider-04.png"
                      alt=""
                    />
                    {/* Video */}
                    <div
                      className={`absolute z-20 pointer-events-auto ${styles.width_custom}`}
                    >
                      <video
                        className={`object-cover w-full h-full ${styles.video_custom}`}
                        src="/video.mp4"
                        controls
                        autoPlay
                        loop
                      ></video>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="relative h-auto">
                <div className="relative flex items-center justify-center pointer-events-none">
                  <img
                    className="-z-0 w-[35rem] lg:w-1/2"
                    src="/images/home-slider-04.png"
                    alt=""
                  />

                  <div className="absolute top-5 left-[14rem] w-[24rem] lg:w-1/2 h-[15rem] z-20 pointer-events-auto">
                    <video
                      className="object-cover w-full h-full"
                      src="/video.mp4"
                      controls
                      autoPlay
                      loop
                    ></video>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.swiper_slide_custom} flex justify-center items-center !h-[75vh] md:!h-[75vh] lg:!h-[95vh] xl:h-[30vh] 2xl:h-[60vh] `}
          >
            <div className={styles.bg_slide_2}></div>
            <div className="swiper-slide-caption">
              <div className="container flex flex-col items-center justify-center w-full h-full gap-8 px-14 animate__animated animate__fadeInUp">
                <h2 className="text-3xl text-center text-white md:text-6xl">
                  Create and Customize Your Own Website
                </h2>
                <h3 className="hidden text-white md:block md:text-5xl">
                  It has never been easier!
                </h3>
                <ul className="group text-xs-nowrap">
                  <li>
                    <button className="px-10 py-4 text-sm font-bold text-white transition-all duration-300 bg-transparent border-white hover:bg-white hover:text-black border-x border-y">
                      Live demo
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`${styles.swiper_slide_custom} flex justify-center items-center !h-[75vh] md:!h-[75vh] lg:!h-[95vh] xl:h-[30vh] 2xl:h-[60vh] `}
          >
            <div className={styles.bg_slide_3}></div>
            <div className="flex items-center justify-center swiper-slide-caption">
              <div className="container flex flex-col items-center justify-center w-full h-full gap-8 px-14 animate__animated animate__fadeInUp">
                <h2 className="text-3xl text-center text-white md:text-6xl">
                  A Variety of Available Customization Options
                </h2>
                <ul className="group text-xs-nowrap">
                  <li>
                    <button className="px-10 py-4 text-sm font-bold text-white transition-all duration-300 bg-transparent border-white hover:bg-white hover:text-black border-x border-y">
                      Live demo
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="banner-contact bg-[#2ed3ae] py-14 px-14 flex justify-center items-center flex-col gap-8">
        <h2 className="text-3xl text-center text-white">
          <span className="text-3xl font-bold text-white">DEVIOZ </span>
          creamos la solución perfecta para tu presencia digital.
        </h2>
        <button className="bg-white hover:bg-transparent px-10 py-4 text-[#2ed3ae] hover:text-white border-x border-y border-white transition-all duration-300 font-bold text-[12px]">
          CONTACTANOS
        </button>
      </div>
    </section>
  );
};
