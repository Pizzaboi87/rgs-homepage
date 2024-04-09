"use client";

import ArticleCard from "@/components/ArticleCard";

import { articleCards } from "@/data/pageData";
import { useEffect, useState } from "react";

const StoriesPage = ({
  searchParams,
}: {
  searchParams: {
    tag: string;
  };
}) => {
  const [selectedHashTag, setSelectedHashTag] = useState<string>("");
  const [filteredArticles, setFilteredArticles] = useState(articleCards);

  const hashTagSet = new Set<string>();
  articleCards.forEach((article) => {
    article.hashTags.forEach((hashTag) => {
      hashTagSet.add(hashTag);
    });
  });

  const hashTags = Array.from(hashTagSet);

  useEffect(() => {
    setSelectedHashTag(searchParams.tag || "");
  }, [searchParams.tag]);

  useEffect(() => {
    if (selectedHashTag === "") {
      setFilteredArticles(articleCards);
    } else {
      setFilteredArticles(
        articleCards.filter((article) =>
          article.hashTags.includes(selectedHashTag)
        )
      );
    }
  }, [selectedHashTag]);

  return (
    <main className="custom-container relative">
      <div className="absolute right-[5%] top-0 z-0 pointer-events-none">
        <img src="/img/logo_decor.svg" alt="decor" width={"550px"} />
      </div>
      <div className="xl:pt-[100px] pt-[25px]">
        <h1 className="font-[700] xl:text-[100px] text-[40px] xl:leading-[100px] leading-[45px]">
          Impact Stories
        </h1>
        <ul className="xl:max-w-[65%] xl:mt-4 mt-6 mb-16 flex xl:gap-3 gap-6 flex-wrap font-[500] xl:text-[22px] text-[16px] xl:leading-[40px] leading-[20px]">
          {hashTags.map((tag, index) => (
            <li
              key={index}
              className="hover:text-active cursor-pointer"
              onClick={() => setSelectedHashTag(tag)}
            >
              #{tag}
            </li>
          ))}
        </ul>
      </div>

      <section>
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} articleData={article} isSwiper={false} />
        ))}
      </section>
    </main>
  );
};

export default StoriesPage;
