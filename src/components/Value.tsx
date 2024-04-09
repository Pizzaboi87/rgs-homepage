"use client";

import useIsDesktop from "@/utils/useIsDesktop";

import { ValueProps } from "@/types/types";
import { FC } from "react";

const Value: FC<ValueProps> = ({ index, valueData }) => {
  const { title, text } = valueData;
  const isDesktop = useIsDesktop();

  return (
    <div data-aos="fade-up" className="xl:col-span-12 mt-[4px]">
      <div
        className="xl:my-[1.85rem] my-[4rem] xl:w-[80%] w-full px-[4px] xl:px-0"
        style={{ marginLeft: `${isDesktop ? index * 50 + "px" : 0}` }}
      >
        <h2 className="font-[700] xl:text-[24px] text-[22px] xl:leading-[27.5px] leading-[24px] mb-[1rem]">
          {title}
        </h2>
        <p className="subtitle mb-[1rem]">{text}</p>
      </div>
    </div>
  );
};

export default Value;
