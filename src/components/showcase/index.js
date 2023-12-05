import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const Showcase = () => {
  return (
    <div className=" pt-[117px] text-white">
      <div className="container bg-showcase_bg">
        <div className="flex items-start justify-between">
          <p className="text-[70px] font-medium mb-[412px]">PromptCraft: <br className="md:flex"/> AI Prompt Engineering <br className="md:flex"/> Bootcamp</p>
          <p className="text-3xl font-medium md:w-[303px]">Unlock the <span className="text-[#7CFE5B]">Power of Prompts </span>and Transform Your AI Applications</p>
        </div>
        <div className="flex items-start justify-between">
          <p className="text-3xl font-light md:w-[1119px]">Generative artificial intelligence provides fast and powerful application development capabilities to artificial intelligence engineers, revolutionizing traditional time frames. In our course, we share best practices, allowing more people to use these opportunities.</p>
          <button className="flex items-center gap-3  bg-[#7CFE5B] text-black rounded-[50px] py-[30px] px-[82px] text-[22px]">To participate <FaLongArrowAltRight size='24' /></button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
