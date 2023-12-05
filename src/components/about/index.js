import React from "react";
import { icon, logo } from "../../assets/images";
import { IoArrowUpSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";


const About = () => {
  const [screen, setScreen] = React.useState("");

  const screenfull = (data) => {
    setScreen(data);
  };

  function backSize(event) {
    event.stopPropagation();
    setScreen("");
  }

  return (
    <div className="pt-[105px] ">
      <div className="container">
        <div className="flex items-start justify-between">
          <img
            src={logo}
            alt="images"
            className="w-[1110px] h-[278px] object-contain"
          />
          <img
            src={icon}
            alt="icon_image"
            className="w-[273px] h-[310px] object-cover"
          />
        </div>
        <div className="space-y-[20px] relative  ">
          <div className="flex items-center gap-[20px]">
            <div
           
              onClick={(e) => {
                setScreen("month_one");
              }}
              className={`flex flex-col justify-between ${
                screen == "month_one"
                  ? "absolute top-0 left-0 h-full scale-100 duration-500 w-full z-10 "
                  : " h-[527px] w-[527px] scale-100  rounded-tr-[50px]  rounded-bl-[50px]"
              }  bg-[#C35DF5]   p-[45px]  `}
            >
              <div className="flex items-start justify-between">
                <p className="w-[369px] text-white text-2xl font-normal">
                  Introduction to Prompt Engineering and Fundamentals of
                  Application Development using Language Models
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
              <p className="text-5xl font-semibold text-white">Month 1</p>
            </div>
            <div
              onClick={() => setScreen("month_two")}
              className={`flex flex-col justify-between bg-[#7CFE5B] p-[45px]   ${
                screen == "month_two"
                  ? "absolute top-0 right-0 scale-100 duration-500 h-full w-full z-10"
                  : " h-[527px] w-[527px] rounded-[50px]"
              }`}
            >
              <div className="flex items-start text-black justify-between">
                <p className="w-[369px]  text-2xl font-normal">
                  Advanced Prompt Engineering and Building a Custom Chatbot
                </p>
                <div
                  className="p-2 bg-black block rounded-full"
                  onClick={backSize}
                >
                  {screen ? (
                    <RxCross1 className="text-[#7CFE5B]" />
                  ) : (
                    <IoArrowUpSharp className="text-[#7CFE5B] rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-5xl font-semibold ">Month 2</p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-[20px]">
            <div
              onClick={() => setScreen("month_three")}
              className={`flex flex-col justify-between bg-bg_about_card bg-no-repeat bg-cover p-[45px]    ${
                screen == "month_three"
                  ? "absolute scale-100 duration-500 bottom-0 left-0 h-full w-full z-10"
                  : " h-[527px] w-[527px] rounded-[50px]"
              }`}
            >
              <div className="flex items-start justify-between">
                <p className="w-[369px] text-white text-2xl font-normal">
                  Applying Prompts in Various Fields and Project Work
                </p>
                <div
                  className="p-2 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen ? (
                    <RxCross1 />
                  ) : (
                    <IoArrowUpSharp className="text-black rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-5xl font-semibold text-white">Month 3</p>
            </div>
            <div
              onClick={() => setScreen("month_four")}
              className={`flex flex-col justify-between bg-[#7CFE5B] p-[45px] ${
                screen == "month_four"
                  ? "absolute scale-100 duration-500 bottom-0 right-0 h-full w-full z-10"
                  : " h-[527px] w-[527px] rounded-tl-[50px]  rounded-br-[50px] "
              } `}
            >
              <div className="flex items-start text-black justify-between">
                <p className="w-[369px]  text-2xl font-normal">
                  Prompt Optimization and Interaction with OpenAI API
                </p>
                <div
                  className="p-2 bg-black block rounded-full"
                  onClick={backSize}
                >
                  {screen ? (
                    <RxCross1 className="text-[#7CFE5B]" />
                  ) : (
                    <IoArrowUpSharp className="text-[#7CFE5B] rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-5xl font-semibold ">Month 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
