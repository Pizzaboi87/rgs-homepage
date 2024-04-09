"use client";

import ArticleContent from "@/components/ArticleContent";
import ArticleHeader from "@/components/ArticleHeader";
import Missing from "@/components/Missing";
import References from "@/components/References";
import Socials from "@/components/Socials";

import { articles } from "@/data/articleData";
import { articleCards } from "@/data/pageData";

const Story = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const url = `https://esg.rgsciences.com/impact-stories/${slug}}`;
  const actualArticle = articleCards.find((article) => article.slug === slug);
  const actualArticleContent = articles[slug];
  const actualArticleReferences = articles[slug]?.filter(
    (content) => content.type === "references"
  );

  if (!actualArticle || !actualArticleContent)
    return <Missing type="article" />;

  return (
    <main className="xl:pb-60">
      <ArticleHeader article={actualArticle} />

      <Socials url={url} />

      <ArticleContent articleContent={actualArticleContent} />

      {actualArticleReferences[0] && (
        <References references={actualArticleReferences[0].references} />
      )}
    </main>
  );
};

export default Story;
