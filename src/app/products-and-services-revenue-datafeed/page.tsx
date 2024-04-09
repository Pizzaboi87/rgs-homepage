"use client";

import React, { useEffect } from "react";
import ReactSelect from "react-select";
import Swal from "sweetalert2";
import Link from "next/link";

import { revenueArticles, sectionTexts } from "@/data/pageData";
import { revenueStyles } from "@/utils/colourStyles";

const Thematic = () => {
  useEffect(() => {
    Swal.fire({
      icon: "info",
      text: "Please choose one of the 10 free demo companies. If you want access to our extended coverage, contact us at: sales@rgsciences.com.",
      background: "#112831",
      color: "#ffffff",
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#121212]">
      <section className="bg-cover bg-no-repeat bg-[url('https://dg8026t2w8m53.cloudfront.net/64053/1662967839-img_0507-1-1.jpg')] -mt-[105px] min-h-[300px] w-full">
        <div className="custom-container my-auto">
          <div className="text-center xl:pt-[105px] pt-[45px] pb-[162px]">
            <h1 className="largetitle text-center pt-[100px] mb-[24px]">
              {sectionTexts.revenue.title}
            </h1>
            <h2 className="xl:font-[700] font-[400] text-[24px] leading-[28px]">
              {sectionTexts.revenue.text}
            </h2>
          </div>
        </div>
      </section>

      <section className="xl:mt-[45px] mt-[78px] mx-auto">
        <div className="flex flex-col items-center text-center xl:pt-[50px] pt-0">
          <h1 className="title mt-1 mb-[1rem] mx-[1rem]">
            {sectionTexts.revenueSearch.title}
          </h1>
          <p className="subtitle custom-container">
            {sectionTexts.revenueSearch.text}{" "}
            <Link
              href="mailto:sales@rgsciences.com?subject=Interested%20in%20RGS%20RIFT"
              className="text-active"
            >
              contact us
            </Link>
          </p>
          <form className="custom-container">
            <fieldset className="border border-normal px-[0.5rem] pt-[0.75rem] pb-[1rem] rounded-[18px] mt-[1rem]">
              <ReactSelect
                styles={revenueStyles}
                className="text-left text-[16px] leading-[22px]"
                placeholder="Search for a company..."
                options={[{ value: "loading", label: "Loading..." }]}
              />
            </fieldset>
          </form>
        </div>
      </section>

      <section className="grid xl:grid-cols-3 grid-cols-1 gap-16 xl:gap-0 text-left xl:mx-[6.25rem] mx-[1rem] md:mx-[2rem] xl:pt-[210px] pt-[100px] pb-10">
        {revenueArticles.map((article, index) => (
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
            {article.paragSecond && (
              <p className="font-[400] text-[18px] leading-[22px] mb-[16px]">
                {article.paragSecond}
              </p>
            )}
            {article.paragThird && (
              <p className="font-[400] text-[18px] leading-[22px]">
                {article.paragThird}
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Thematic;
