import React from "react";
import { icon, logo2 } from "../../assets/images";
import { IoArrowUpSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Card from "../card";

const MODULE_ONE = [
  "Введение в Python и его основные концепции.",
  " Работа с операторами и выражениями в языке Python.",
  " Условные операторы для создания ветвлений в коде.",
  " Циклы while и for с обзором работы с числами, строками и коллекциями.",
  "Работа с функциями, их определение и использование.",
  "Особенности работы с числовыми типами данных и числами с плавающей точкой.",
  "Основы базовых коллекций: списков, строк, словарей и кортежей.",
  "Методы работы со списками и представления списков.",
  "Ввод и вывод данных с использованием файлов.",
  "Обработка исключений для управления ошибками в программе.",
  " Введение в объектно-ориентированное программирование (ООП) и его принципы.",
  " Итераторы, генераторы и их использование.",
  " Основы декораторов для улучшения функциональности кода.",
  "Знакомство с библиотеками для обработки данных.",
];

const MODULE_TWO = [
  "Разработка веб-приложений с использованием Flask",
  " Основы работы в среде Linux.",
  "Культура непрерывной интеграции (CI).",
  " Отладка и профилирование кода, использование логгера.",
  "Деплой приложений на платформе Linux и контейнеризация с Docker.",
  "Многозадачность и асинхронное программирование с использованием asyncio и FastAPI.",
  "Работа с базой данных Postgres и миграции данных.",
  "Тестирование с использованием Pytest и Mock.",
  "Аспекты безопасности в разработке.",
  "Использование линтеров для поддержания качества кода.",
  " Непрерывная доставка (CD) и автоматический деплой.",
];

const MODULE_THREE = [
  " Работа с базой данных и создание моделей в Django.",
  " Использование административного интерфейса для управления данными.",
  "Обработка HTTP-запросов и создание форм.",
  "  Использование классов для создания представлений и обобщенных представлений.",
  "Реализация аутентификации, авторизации, регистрации и управление правами доступа.",
  "Тестирование приложений Django.",
  " Работа с файлами, локализация и интернационализация.",
  "Документирование кода и эффективная работа с базой данных.",
  "Логирование, профилирование и оптимизация приложений.",
  " Экспорт и импорт данных, кеширование для оптимизации производительности.",
  "Деплой приложений и командная разработка в среде Django",
];

const MODULE_FOUR = [
  "Введение в веб-разработку.",
  "Основы HTML и CSS: разметка, структура и стили.",
  "Подготовка к верстке: инструменты и ресурсы.",
  "Layout: HTML-разметка, Flexbox и стилизация.",
  " Продвинутые темы HTML: работа с формами.",
  " Продвинутый CSS: утонченные стили и техники.",
  "Адаптивность: оптимизация для десктопа и мобильных устройств.",
  "Обеспечение доступности и кроссбраузерность.",
  " Использование сеток для сложных макетов.",
  "Анимация средствами CSS и JavaScript.",
  " Оптимизация загрузки страницы и отрисовка креативных элементов.",
  " Сборщики и автоматизация рабочего процесса.",
  " Препроцессоры и Постпроцессоры для улучшения CSS.",
  "Использование CSS Grid для сложных макетов.",
  "Использование сеток для более сложных макетов.",
  "Будущее веб-разработки: тренды и перспективы. ",
  
];

const MODULE_FIVE = [
  " Введение в SQL и его базовые принципы.",
  "Обзор реляционных баз данных и их роли в хранении данных.",
  "Основные запросы для работы с данными в SQL.",
  " Использование функций и выражений в SQL-запросах.",
  "Принципы проектирования и оптимизации реляционных баз данных.",

  "Начало работы с Git на локальном компьютере.",
  "Взаимодействие с удаленным репозиторием в Git.",
  "Командная работа в Git: совместная разработка и ветвление.",
  "Сравнение версий и отмена изменений в Git.",
  " Инструменты и правила эффективной работы с системой контроля версий Git.",
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
        <div className="flex  items-center justify-between">
          <img
            src={logo2}
            alt="images"
            className="w-[328px] ml-0 md:w-[700px] h-[278px] object-contain md:object-cover"
          />
          <img
            src={icon}
            alt="icon_image"
            className="w-[85px] ml-auto xl:w-[273px] h-[97px] lg:h-[310px] object-cover"
          />
        </div>
        <div className="space-y-[20px] relative  ">
          <div className="flex flex-wrap md:flex-nowrap items-center gap-[20px]">
            {/* one */}
            <div
              onClick={(e) => {
                setScreen("month_one");
              }}
              className={`flex flex-col justify-between rounded-[14px]   md:rounded-[50px] ${
                screen == "month_one"
                  ? "absolute   top-0 left-0 h-full md:h-[50%] scale-100 duration-200 w-full z-10 "
                  : "w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px] scale-100  "
              }  bg-blue-600 p-[10px]  md:p-[30px]  `}
            >
              <div className="relative ">
                <div className=" text-white ">
                  <p className="text-[12px] md:text-2xl font-bold md:pb-4">
                    Основы Python:
                  </p>
                  {screen != "month_one" && (
                    <p className="text-[7px] md:text-base">
                      Изучите основы программирования на Python, включая
                      условия, циклы и функции, а также работу с данными и
                      коллекциями.
                    </p>
                  )}
                  {screen == "month_one" && (
                    <ul className="list-inside text-[10px]  md:text-xl font-normal list-disc">
                      {MODULE_ONE.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="p-1 md:p-2 bg-white block rounded-full cursor-pointer absolute top-0 right-0"
                  onClick={backSize}
                >
                  {screen == "month_one" ? (
                    <RxCross1 />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600  rotate-45 " />
                  )}
                </div>
              </div>
              {screen !== "month_one" && (
                <p className="text-[22px] md:text-5xl font-semibold text-white">
                  Module 1
                </p>
              )}
            </div>

            {/* two */}
            <div
              onClick={() => setScreen("month_two")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[30px]  rounded-[14px] md:rounded-[50px] ${
                screen == "month_two"
                  ? "absolute top-0 right-0 scale-100 duration-200 h-full md:h-[50%] w-full z-10"
                  : " lg:h-[527px] w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:w-[527px] "
              }`}
            >
              <div className="relative text-white">
                <div className=" text-white ">
                  <p className="text-[12px] md:text-2xl font-bold md:pb-4">
                    Python Advanced:
                  </p>
                  {screen != "month_two" && (
                    <p className="text-[7px] md:text-base ">
                      Продвинутый уровень Python — веб-разработка с Flask,
                      работа в Linux, непрерывная интеграция, Docker, базы
                      данных, тестирование, безопасность, Django и FastAPI.
                    </p>
                  )}
                  {screen == "month_two" && (
                    <ul className="list-inside text-[10px] md:text-xl font-normal list-disc">
                      {MODULE_TWO.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="p-1 md:p-2 absolute right-0 top-0 bg-white block rounded-full"
                  onClick={backSize}
                >
                  {screen == "month_two" ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              {screen != "month_two" && (
                <p className="text-[22px] text-white md:text-5xl font-semibold ">
                  Module 2
                </p>
              )}
            </div>

            {/* three  */}
            <div
              onClick={() => setScreen("month_three")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[30px]  rounded-[14px] md:rounded-[50px] ${
                screen == "month_three"
                  ? "absolute top-0 right-0 scale-100 duration-200 h-full md:h-[50%] w-full z-10"
                  : " lg:h-[527px] w-[146px] h-[146px] md:h-[400px] md:w-[400px] lg:w-[527px] "
              }`}
            >
              <div className=" text-white relative">
                <div className=" text-white ">
                  <p className="text-[12px] md:text-2xl font-bold md:pb-4">
                    Python-фреймворк Django:
                  </p>
                  {screen != "month_three" && (
                    <p className="text-[7px] md:text-base">
                      Научитесь создавать веб-приложения, работать с базой
                      данных, административным интерфейсом, формами,
                      аутентификацией, тестированием и деплоем.
                    </p>
                  )}
                  {screen == "month_three" && (
                    <ul className="list-inside text-[10px] md:text-xl font-normal list-disc">
                      {MODULE_THREE.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="md:p-2 p-1 bg-white block rounded-full absolute right-0 top-0"
                  onClick={backSize}
                >
                  {screen == "month_three" ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              {screen != "month_three" && (
                <p className="text-[22px] text-white md:text-5xl font-semibold ">
                  Month 3
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-[20px]">
            {/* four */}
            <div
              onClick={() => setScreen("month_four")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[30px] rounded-[14px] md:rounded-[50px]   ${
                screen == "month_four"
                  ? "absolute scale-100 duration-200 bottom-0 left-0 h-full md:h-[50%] w-full z-10"
                  : "h-[146px] w-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px] "
              }`}
            >
              <div className="flex items-start justify-between relative">
                <div className=" text-white">
                  <p className="text-[12px] md:text-2xl font-bold md:pb-4">
                    Веб-разработка "Основы:
                  </p>
                  {screen != "month_four" && (
                    <p className="text-[7px] md:text-base w-full  ">
                      Освойте HTML, CSS, макеты, адаптивность, доступность,
                      кроссбраузерность, анимацию, работу с хостингом и
                      оптимизацию загрузки.
                    </p>
                  )}
                  {screen == "month_four" && (
                    <ul className="list-inside text-[10px] md:text-xl font-normal list-disc">
                      {MODULE_FOUR.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="p-1 md:p-2 bg-white block rounded-full absolute right-0"
                  onClick={backSize}
                >
                  {screen == "month_four" ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              {screen != "month_four" && (
                <p className="text-[22px] md:text-5xl font-semibold text-white">
                  Module 4
                </p>
              )}
            </div>

            {/* five */}
            <div
              onClick={() => setScreen("month_five")}
              className={`flex flex-col justify-between bg-blue-600 p-[10px] md:p-[30px]  rounded-[14px] md:rounded-[50px]  ${
                screen == "month_five"
                  ? "absolute scale-100 duration-200 bottom-0 right-0 h-full md:h-[50%] w-full z-10"
                  : " h-[146px] w-[146px] md:h-[400px] md:w-[400px] lg:h-[527px] lg:w-[527px]    "
              } `}
            >
              <div className="text-white  relative">
                <div className=" text-white ">
                  <p className="text-[12px] md:text-2xl font-bold md:pb-4">
                    Основы SQL:
                  </p>
                  {screen != "month_five" && (
                    <p className="text-[7px] md:text-base">
                      Изучите базовые SQL-запросы и принципы проектирования
                      реляционных баз данных.
                    </p>
                  )}
                  {screen == "month_five" && (
                    <ul className="list-inside text-[10px] md:text-xl font-normal list-disc">
                      {MODULE_FIVE.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div
                  className="p-1 md:p-2 bg-white block rounded-full absolute right-0 top-0"
                  onClick={backSize}
                >
                  {screen == "month_five" ? (
                    <RxCross1 className="text-blue-600" />
                  ) : (
                    <IoArrowUpSharp className="text-blue-600 rotate-45" />
                  )}
                </div>
              </div>
              {screen != "month_five" && (
                <p className="text-[22px] text-white md:text-5xl font-semibold ">
                  Module 5
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
