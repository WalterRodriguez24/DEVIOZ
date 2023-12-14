import { useState } from "react";
import { arrayImages } from "../../helpers";

export const Pages = () => {
  const [sectionSelected, setSectionSelected] = useState(2);

  const onSectionSelected = (section: number) => {
    setSectionSelected(section);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full mt-20 gap-y-10 ">
      <h2 className="text-5xl text-center">Pages</h2>
      <div className="flex flex-wrap items-center justify-center gap-8 px-4">
        <button
          className={`uppercase ${
            sectionSelected === 1 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(1)}
        >
          All
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 2 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(2)}
        >
          Pages
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 3 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(3)}
        >
          Events
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 4 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(4)}
        >
          Blog
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 5 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(5)}
        >
          Gallery
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 6 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(6)}
        >
          Shop
        </button>
        <button
          className={`uppercase ${
            sectionSelected === 7 && "text-[#2ed3ae]"
          } text-[0.8rem] hover:text-[#2ed3ae] transition-all duration-300`}
          onClick={() => onSectionSelected(7)}
        >
          Elements
        </button>
      </div>

      {/* Content */}
      <div className="grid w-full grid-cols-1 gap-12 px-4 mt-4 cursor-pointer lg:grid-cols-4 justify-items-center md:grid-cols-3 sm:grid-cols-2">
        {/* Card */}
        {arrayImages.map(
          (image, index) =>
            sectionSelected === image.section && (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-8 animate__animated animate__zoomIn animate__faster"
              >
                <div className="transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-105">
                  <img
                    src={image.src}
                    width={500}
                    height={500}
                    alt={image.name}
                  />
                </div>
                <span className="text-xl">{image.name}</span>
              </div>
            )
        )}
      </div>
    </section>
  );
};
