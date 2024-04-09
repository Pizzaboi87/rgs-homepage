"use client";

import useIsDesktop from "@/utils/useIsDesktop";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { articleCards, sectionTexts } from "@/data/pageData";

import "swiper/css/pagination";
import "swiper/css";

const Articles = () => {
  const isDesktop = useIsDesktop();

  return (
    <section className="xl:mt-[100px] mt-[78px] pb-[50px] flex flex-col">
      <div className="text-center xl:pt-[50px] pt-0">
        <h1 className="title mt-1 mb-[1rem]">{sectionTexts.articles.title}</h1>
        <p className="subtitle text-center">{sectionTexts.articles.text}</p>
      </div>
      <Swiper
        modules={[Mousewheel, Pagination]}
        spaceBetween={isDesktop ? 220 : 0}
        slidesPerView={isDesktop ? 3 : 1}
        slidesOffsetAfter={isDesktop ? 50 : 0}
        slidesOffsetBefore={isDesktop ? 50 : 0}
        loop={true}
        mousewheel={{
          forceToAxis: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full mt-[2.5rem] xl:h-[400px] md:h-[330px] h-full overflow-hidden"
      >
        {articleCards.map((article, index) => (
          <SwiperSlide key={index}>
            <ArticleCard articleData={article} isSwiper={true} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link
        href="impact-stories"
        className="nav--button text-center xl:w-[9.35rem] w-[87.5%] py-[0.8rem] px-[0.85rem] self-center mt-[42px]"
      >
        Show all
      </Link>
    </section>
  );
};

export default Articles;
