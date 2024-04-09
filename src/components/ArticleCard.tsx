import Link from "next/link";

import { ArticleCardProps } from "@/types/types";
import { ArrowRight } from "./Arrow";
import { FC } from "react";

const ArticleCard: FC<ArticleCardProps> = ({ articleData, isSwiper }) => {
  const {
    articleBg,
    authorFirstName,
    authorLastName,
    authorImage,
    date,
    title,
    text,
    slug,
  } = articleData;

  return (
    <div
      style={{ backgroundImage: `url(${articleBg})` }}
      className={`${
        !isSwiper
          ? "xl:w-[82.5%] mb-12"
          : "xl:w-[calc(603px-3.5rem)] w-[calc(screen-0.5rem)] xl:mb-0 mb-12"
      } p-[1.9rem] rounded-[18px] xl:h-[350px] lg:h-[280px] mx-[0.5rem] xl:mx-0 bg-no-repeat bg-cover relative xl:mr-[30px] hover:scale-[1.015] box-shadow.sm article--card cursor-pointer`}
    >
      <Link href={`impact-stories/${slug}`}>
        <div className="bg-[#000000bb] w-full h-full absolute top-0 left-0 rounded-[18px]" />
        <div className="relative content">
          <div className="mb-[0.75rem] inline-flex">
            {authorImage ? (
              <img
                className="w-[40px] h-[40px] rounded-full object-cover mr-[0.5rem]"
                src={authorImage}
                alt="Author"
              />
            ) : (
              <div className="w-[40px] h-[40px]" />
            )}
            <div className="my-auto">
              <p className="font-[400] text-[14px] leading-[100%] mt-[1px]">
                {authorFirstName}
                <br />
                {authorLastName}
              </p>
            </div>
          </div>

          <p className="font-[400] text-[14px] leading-[120%] mt-3 mb-2">
            {date}
          </p>
          <h1 className="card-title text-text">{title}</h1>
          {!isSwiper && (
            <ul className="flex flex-wrap gap-2 list-none font-[700] mt-4 mb-7">
              {articleData.hashTags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          )}
          <p className="my-4">{text}</p>
        </div>
        <div className="absolute right-[2rem] bottom-[2rem]">
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
