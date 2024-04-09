import Link from "next/link";

import { CardProps } from "@/types/types";
import { ArrowRight } from "./Arrow";
import { FC } from "react";

const Card: FC<CardProps> = ({ index, cardData }) => {
  const { icon, title, text, link, bottomText } = cardData;

  return (
    <div
      className={`${
        index == 0 ? "col-span-2" : "col-span-1"
      } card--container relative`}
      data-aos="fade-up"
      data-aos-delay={index * 250}
    >
      <Link href={link}>
        <div className="card cursor-pointer xl:h-[250px] mb-[1rem] xl:mb-0">
          <div className="content inline-flex">
            <div className="mr-[1rem]">
              <img src={icon} alt="Icon" className="w-[50px] max-w-[50px]" />
            </div>
            <div>
              <p className="font-[700] xl:text-[28px] text-[22px] xl:leading-[32px] leading-[24px] mb-[1rem]">
                {title}
              </p>
              <p className="font-[700] text-[16px] xl:leading-[24px] leading-[20px] xl:mb-[2rem] mb-[1.75rem]">
                {text}
              </p>
            </div>
          </div>
          <div className="font-[400] text-[14px] absolute bottom-[2rem] right-[2rem]">
            {bottomText ? <p>{bottomText}</p> : <ArrowRight />}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
