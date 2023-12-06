import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const Showcase = () => {
  return (
    <div className=" pt-[117px] text-white">
      <div className="container bg-showcase_bg">
        <div className="flex flex-col md:flex-row  items-start justify-between">
          <p className="text-lg md:text-[50px] lg:text-[70px] md:leading-[50px] lg:leading-[100px] font-medium mb-[55px] md:mb-[412px]">PromptCraft: <br className="md:flex"/> AI Prompt Engineering <br className="md:flex"/> Bootcamp</p>
          <p className="text-lg  md:text-3xl ml-auto text-right font-medium w-[303px]">Unlock the <span className="text-[#7CFE5B]">Power of Prompts </span>and Transform Your AI Applications</p>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <p className="text-base  mt-[73px] md:mt-0 mb-[32px] md:mb-0 md:text-3xl font-light lg:w-[1119px]">Generative artificial intelligence provides fast and powerful application development capabilities to artificial intelligence engineers, revolutionizing traditional time frames. In our course, we share best practices, allowing more people to use these opportunities.</p>
          <button className="flex items-center gap-3  bg-[#7CFE5B] text-black rounded-[50px] py-[30px] px-[82px] text-lg md:text-[22px]">To participate <FaLongArrowAltRight size='24' /></button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
