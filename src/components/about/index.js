import React from "react";
import { icon, logo2 } from "../../assets/images";
import { IoArrowUpSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Card from "../card";

const DATA = [
  {
    id: 1,
    onclick: "month_one",
    paragh: [
      "Работа с языком программирования Python от основ до продвинутого уровня.",
      "Операторы, выражения, условные операторы и циклы.",
      "Работа с различными типами данных, включая числа, строки, списки, словари и кортежи.",
    ],
    month: "Month 1",
  },
  {
    id: 2,
    onclick: "month_two",
    paragh: [
      "Изучение Flask для создания веб-приложений.",
      "Основы работы в Linux и принципы культуры Continuous Integration (CI).",
      "Дебаггинг, профилирование и логгирование кода.",
      "Введение в Docker для контейнеризации приложений.",
      " Работа с базами данных, включая PostgreSQL и миграции данных.",
      "Обзор тестирования с использованием Pytest и Mock.",
      "Обеспечение безопасности в приложениях и использование инструментов линтинга.",
    ],
    month: "Month 2",
  },
  {
    id: 3,
    onclick: "month_three",
    paragh: [
      "Введение в базы данных и язык SQL.",
      "Погружение в SELECT, подзапросы, представления и группировку данных.",
      " Работа с отношениями, соединениями и оконными функциями.  ",
      "ранзакции, ACID-свойства и процедуры в базах данных.",
      " Проектирование структуры данных, индексы и программные средства работы с БД.",
    ],
    month: "Month 3",
  },
  {
    id: 4,
    onclick: "month_four",
    paragh: [
      "Обзор базового HTML и CSS, включая адаптивность и кроссбраузерность.",
      "Работа с макетами, Flexbox, CSS Grid и анимациями.",
      "Использование JavaScript для создания динамических элементов и оптимизации загрузки страниц.",
    ],
    month: "Month 4",
  },
  {
    id: 5,
    onclick: "month_five",
    paragh: [
      " Работа с базой данных и моделями в Django.",
      "Административный интерфейс, обработка запросов и классы представлений.",
      "Аутентификация, авторизация и регистрация пользователей.",
      "Тестирование, работа с файлами и локализация приложений.",
      "Эффективная оптимизация работы с базой данных, логирование и деплой приложений",
    ],
    month: "Month 5",
  },
];

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
    <div id="mentor" className="pt-[50px] ">
      <div className="container">
        <div className="flex items-start justify-between">
          <img
            src={logo2}
            alt="images"
            className="we-[328px] ml-0 md:w-[700px] h-[278px] object-cover"
          />
          <img
            src={icon}
            alt="icon_image"
            className="w-[85px] xl:w-[273px] h-[97px] lg:h-[310px] object-cover"
          />
        </div>
        <div className="space-y-[20px] relative  ">
          <div className="flex items-center gap-[20px]">
            {/* one */}
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
                  <ul className="list-inside list-disc">
                    <li>
                      Работа с языком программирования Python от основ до
                      продвинутого уровня.
                    </li>
                    <li>Операторы, выражения, условные операторы и циклы.</li>
                    <li>
                      Работа с различными типами данных, включая числа, строки,
                      списки, словари и кортежи.
                    </li>
                  </ul>
                </p>
                <div
                  className="p-2 bg-white block rounded-full cursor-pointer"
                  onClick={backSize}
                >
                  {screen == 'month_one' ? (
                    <RxCross1 />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-[22px] md:text-5xl font-semibold text-white">
                Month 1
              </p>
            </div>

            {/* two */}
            <div
              onClick={() => setScreen("month_two")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[45px]  rounded-[14px] md:rounded-[50px] ${
                screen == "month_two"
                  ? "absolute top-0 right-0 scale-100 duration-500 h-full w-full z-10"
                  : " lg:h-[527px] w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:w-[527px] "
              }`}
            >
              <div className="flex items-start text-white justify-between">
                <ul className="w-[369px] list-inside list-disc text-[12px]  md:text-2xl font-normal">
                  {[
                    "Изучение Flask для создания веб-приложений.",
                    "Основы работы в Linux и принципы культуры Continuous Integration (CI).",
                    "Дебаггинг, профилирование и логгирование кода.",
                    "Введение в Docker для контейнеризации приложений.",
                    " Работа с базами данных, включая PostgreSQL и миграции данных.",
                    "Обзор тестирования с использованием Pytest и Mock.",
                    "Обеспечение безопасности в приложениях и использование инструментов линтинга.",
                  ].map( (li, idx)=> <li key={idx}>{li}</li>)}
                </ul>
                <div
                  className="p-2 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen == 'month_two' ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-[22px] text-white md:text-5xl font-semibold ">
                Month 2
              </p>
            </div>

            {/* three  */}
            <div
              onClick={() => setScreen("month_three")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[45px]  rounded-[14px] md:rounded-[50px] ${
                screen == "month_three"
                  ? "absolute top-0 right-0 scale-100 duration-500 h-full w-full z-10"
                  : " lg:h-[527px] w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:w-[527px] "
              }`}
            >
              <div className="flex items-start text-white justify-between">
                <p className="w-[369px] text-[12px]  md:text-2xl font-normal">
                  Advanced Prompt Engineering{" "}
                  <span className="hidden md:flex">
                    and Building a Custom Chatbot
                  </span>
                </p>
                <div
                  className="p-2 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen == 'month_three' ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-[22px] text-white md:text-5xl font-semibold ">
                Month 3
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            {/* four */}
            <div
              onClick={() => setScreen("month_four")}
              className={`flex flex-col justify-between bg-blue-600 bg-no-repeat bg-cover p-[10px] md:p-[45px] rounded-[14px] md:rounded-[50px]   ${
                screen == "month_four"
                  ? "absolute scale-100 duration-500 bottom-0 left-0 h-full w-full z-10"
                  : "h-[146px] w-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px] "
              }`}
            >
              <div className="flex items-start justify-between">
                <p className="w-[369px] text-[12px] text-white md:text-2xl font-normal">
                  Applying Prompts in Various Fields{" "}
                  <span className="hidden md:flex">and Project Work</span>
                </p>
                <div
                  className="p-2 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen == 'month_four' ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-[22px] md:text-5xl font-semibold text-white">
                Month 4
              </p>
            </div>

            {/* five */}
            <div
              onClick={() => setScreen("month_five")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[45px]  rounded-[14px] md:rounded-[50px]  ${
                screen == "month_five"
                  ? "absolute scale-100 duration-500 bottom-0 right-0 h-full w-full z-10"
                  : " h-[146px] w-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px]    "
              } `}
            >
              <div className="flex items-start text-white justify-between">
                <p className="w-[369px] text-[12px] md:text-2xl font-normal">
                  Prompt Optimization
                  <span className="hidden md:flex">
                    {" "}
                    and Interaction with OpenAI API
                  </span>
                </p>
                <div
                  className="p-2 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen == 'month_five' ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              <p className="text-[22px] text-white md:text-5xl font-semibold ">
                Month 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
