import React from "react";
import { IoArrowUpSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Card = () => {
  const [screen, setScreen] = React.useState("");

  const screenfull = (data) => {
    setScreen(data);
  };

  function backSize(event) {
    event.stopPropagation();
    setScreen("");
  }
  return (
    <div
      onClick={(e) => {
        setScreen("month_one");
      }}
      className={`flex flex-col justify-between rounded-[14px]   md:rounded-[50px] ${
        screen == "month_one"
          ? "absolute   top-0 left-0 h-full scale-100 duration-500 w-full z-10 "
          : "w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px] scale-100  "
      }  bg-blue-600 p-[10px]  md:p-[45px]  `}
    >
      <div className="flex items-start justify-between">
        <p className="w-[369px] text-white text-[12px] md:text-2xl font-normal">
          <ul className="list-disc">
            <li>
              Работа с языком программирования Python от основ до продвинутого
              уровня.
            </li>
            <li>Операторы, выражения, условные операторы и циклы.</li>
            <li>
              Работа с различными типами данных, включая числа, строки, списки,
              словари и кортежи.
            </li>
          </ul>
        </p>
        <div
          className="p-2 bg-white block rounded-full cursor-pointer"
          onClick={backSize}
        >
          {screen ? (
            <RxCross1 />
          ) : (
            <IoArrowUpSharp className="text-[#C35DF5] rotate-45" />
          )}
        </div>
      </div>
      <p className="text-[22px] md:text-5xl font-semibold text-white">
        Month 1
      </p>
    </div>
  );
};

export default Card;
