import { ContentProps } from "@/types/types";
import { FC } from "react";

const Content: FC<ContentProps> = ({ content }) => {
  switch (content.type) {
    case "image-with-list":
      return (
        <div className="custom-container flex flex-col xl:even:flex-row-reverse items-center xl:flex-row gap-16 xl:py-20 py-10">
          <img
            src={content.image}
            alt={content.alt}
            className="xl:max-w-[45vw] h-auto drop-shadow-sm"
          />
          <div className="flex flex-col gap-[1rem] xl:max-w-[27.5%]">
            <h3 className="font-[700] text-[24px] leading-[28px]">
              {content.title}
            </h3>
            <ul className="pl-[2rem] font-[400] text-[18px] leading-[22px] list-disc">
              {content.list?.map((item, index) => (
                <li className="mb-[1rem]" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "image-with-text":
      return (
        <div className="flex flex-col xl:even:flex-row-reverse items-center xl:flex-row gap-16 xl:py-20 py-10">
          <img
            src={content.image}
            alt={content.alt}
            className="xl:max-w-[65%] h-auto drop-shadow-sm"
          />
          <div className="flex flex-col gap-[1rem] xl:max-w-[27.5%]">
            <h3 className="font-[700] text-[24px] leading-[28px]">
              {content.title}
            </h3>
            <p className="font-[400] text-[18px] leading-[22px]">
              {content.text}
            </p>
          </div>
        </div>
      );

    case "image-with-columns":
      return (
        <div className="flex flex-col items-center gap-8">
          <img
            src={content.image}
            alt={content.alt}
            className="w-[82.5%] h-auto py-[2rem] drop-shadow-sm"
          />
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 xl:gap-0 text-left">
            {content.columns?.map((column, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left xl:pt-[50px] pt-0 search-article px-[24px]"
              >
                <h2 className="font-[700] text-[24px] leading-[28px] mb-[16px]">
                  {column.title}
                </h2>
                <p className="font-[400] text-[18px] leading-[22px] mb-[16px]">
                  {column.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      );

    case "image-with-list-columns":
      return (
        <div className="flex flex-col items-center gap-8">
          <img
            src={content.image}
            alt={content.alt}
            className="w-[82.5%] h-auto py-[2rem] drop-shadow-sm"
          />
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 xl:gap-0 text-left">
            {content.columns?.map((column, index) => (
              <div
                key={index}
                className="flex flex-col items-start text-left xl:pt-[50px] pt-0 search-article px-[24px]"
              >
                <h2 className="font-[700] text-[24px] leading-[28px] mb-[16px]">
                  {column.title}
                </h2>
                <ul className="pl-[2rem] font-[400] text-[18px] leading-[22px] list-disc mb-[16px]">
                  {column.list?.map((item, index) => (
                    <li className="mb-[1rem]" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Content;
