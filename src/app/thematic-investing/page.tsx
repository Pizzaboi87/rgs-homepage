"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { searchTags, sectionTexts, thematicArticles } from "@/data/pageData";
import { Tag } from "@/components/Tag";
import { Icon } from "@iconify-icon/react";

const Thematic = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      Swal.fire({
        icon: "error",
        text: "Error during thematic search!",
        background: "#112831",
        color: "#ffffff",
      });
      setSearchValue("");
      setIsLoading(false);
    }, 3000);
  };

  const handleTagClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tag: string
  ) => {
    setSearchValue(tag);
    handleSubmit(event);
  };

  useEffect(() => {
    Swal.fire({
      icon: "info",
      text: "Please choose one of the 10 free demo companies. If you want access to our extended coverage, contact us at: sales@rgsciences.com.",
      background: "#112831",
      color: "#ffffff",
    });
  }, []);

  return (
    <main className="min-h-screen">
      <section className="bg-cover bg-no-repeat bg-[url('https://dg8026t2w8m53.cloudfront.net/64053/1665652501-wind_energy2.jpg')] -mt-[105px] min-h-[300px] w-full">
        <div className="custom-container my-auto">
          <div className="text-center pt-[105px] pb-[162px]">
            <h1 className="largetitle text-center xl:pt-[100px] pt-[30px] xl:mb-[24px] mb-[28px]">
              {sectionTexts.thematic.title}
            </h1>
            <h2 className="xl:font-[700] font-[500] xl:text-[24px] text-[22px] xl:leading-[28px] leading-[24px]">
              {sectionTexts.thematic.text}
            </h2>
          </div>
        </div>
      </section>

      <section className="custom-container mt-[45px] xl:max-w-[55%] mx-auto">
        <div className="flex flex-col items-center text-center xl:pt-[50px] pt-0">
          <h1 className="title mt-1 mb-[1rem]">
            {sectionTexts.thematicSearch.title}
          </h1>
          <p className="subtitle xl:w-[75%] md:w-[85%]">
            {sectionTexts.thematicSearch.text}
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              className="py-[0.6rem] md:w-[75%] w-full px-[1rem] rounded-[12px] mt-[3rem] text-normal outline-none"
              type="search"
              value={searchValue}
              onChange={handleChange}
              placeholder="Search for anything..."
            />
          </form>
          <div className="xl:w-[70%] mt-6 flex flex-wrap justify-center gap-2">
            {searchTags.map((tag, index) => (
              <Tag key={index} tag={tag} handleTagClick={handleTagClick} />
            ))}
          </div>
        </div>
      </section>

      {isLoading && (
        <section className="custom-container flex flex-col gap-6 items-center justify-center mt-[50px] -mb-[50px]">
          <Icon icon="eos-icons:loading" className="text-[3rem]" />
          <p className="font-[400] text-[18px] leading-[22px]">
            Searching among 1.5K companies and 350+ product categories
          </p>
        </section>
      )}

      <section className="grid xl:grid-cols-3 grid-cols-1 gap-16 xl:gap-0 text-left xl:mx-[6.25rem] mx-[1rem] md:mx-[2rem] pt-[210px] pb-10">
        {thematicArticles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left xl:pt-[50px] pt-0 search-article px-[24px]"
          >
            <h2 className="font-[700] text-[24px] leading-[28px] mb-[16px]">
              {article.title}
            </h2>
            <p className="font-[400] text-[18px] leading-[22px] mb-[16px]">
              {article.paragFirst}
            </p>
            <p className="font-[400] text-[18px] leading-[22px]">
              {article.paragSecond}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Thematic;
