import Card from "./Card";
import Value from "./Value";

import { cards, sectionTexts, values } from "@/data/pageData";

const Hero = () => {
  return (
    <section className="bg-[url(/img/bg-gradient.png)] bg-no-repeat bg-cover-100 z-0 -mt-[95px]">
      <div className="bg-bottom bg-no-repeat bg-cover pt-[95px]">
        <section
          className="custom-container px-[1.5rem] text-center xl:mt-[132px] mt-[57px] xl:mb-[50px] mb-[45px]"
          id="products"
        >
          <h1 className="mt-[2rem] xl:mb-[1rem] mb-[0.6rem] font-[700] xl:text-[50px] md:text-[42px] text-[26px] xl:leading-[50px] leading-[42px]">
            {sectionTexts.hero.title}
          </h1>
          <h2 className="font-[400] text-[20px] xl:leading-[36px] leading-[24px]">
            {sectionTexts.hero.text}
          </h2>
        </section>

        <section>
          <div className="xl:mx-[4.75rem]">
            <div className="xl:grid xl:grid-cols-3 xl:grid-rows-2 w-full px-[1rem] gap-4">
              {cards.map((card, index) => {
                return <Card key={index} cardData={card} index={index} />;
              })}
            </div>
          </div>
        </section>

        <section
          className="custom-container xl:grid xl:grid-cols-12 mt-[100px] pb-[50px]"
          id="about"
        >
          <div className="xl:col-span-10 xl:col-start-2 mb-12 xl:pt-[85px] pt-[10px]">
            <div className="text-center">
              <h1 className="mt-[2rem] mb-[1rem] title">
                {sectionTexts.values.title}
              </h1>
            </div>
          </div>
          <div className="xl:col-span-12 mb-4 px-[4px] xl:px-0">
            <h2 className="subtitle xl:mb-[1.35rem] mb-[4.5rem] xl:mt-0 mt-[4rem]">
              {sectionTexts.values.text}
            </h2>
          </div>
          {values.map((value, index) => (
            <Value key={index} index={index} valueData={value} />
          ))}
        </section>

        <img
          src="/img/chart-bg.png"
          alt="Features"
          width="100%"
          className="xl:-mt-[48px] -mt-[7px]"
        />
      </div>
    </section>
  );
};

export default Hero;
