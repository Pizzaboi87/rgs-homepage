import Link from "next/link";

import { ArrowRight } from "./Arrow";
import { partnerCards, sectionTexts } from "@/data/pageData";
import { PartnerProps } from "@/types/types";
import { FC } from "react";

const PartnerCard: FC<PartnerProps> = ({ partnerData }) => {
  const { link, image } = partnerData;

  return (
    <div className="col-span-6 card cursor-pointer xl:mb-4 mb-6 w-full h-fit hover:scale-[1.015] relative partner--card">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between pb-[0.4rem] content"
      >
        <img
          className="h-[54px] w-auto max-h-[54px]"
          src={image}
          alt="Partner"
        />
        <ArrowRight />
      </Link>
    </div>
  );
};

const Partners = () => {
  return (
    <section className="xl:mt-[112px] mt-[36px] pb-[50px] flex flex-col">
      <div className="text-center">
        <h1 className="title mt-1 mb-[1rem]">{sectionTexts.partners.title}</h1>
        <p className="subtitle text-center">{sectionTexts.partners.text}</p>
      </div>
      <div className="custom-container grid xl:grid-cols-12 grid-cols-6 xl:gap-6 mt-[2.5rem] p-[0.5rem]">
        {partnerCards.map((partner, index) => (
          <PartnerCard key={index} partnerData={partner} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
