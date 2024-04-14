import { ArticleContentType } from "@/types/types";
import { FC } from "react";

const ArticleContent: FC<ArticleContentType> = ({ articleContent }) => {
  return (
    <article className="custom-container xl:max-w-[70%] mt-12">
      {articleContent?.map((content, index) => {
        switch (content.type) {
          case "title":
            return (
              <h2
                key={index}
                className="font-[700] text-[24px] leading-[120%] mb-9"
              >
                {content.title}
              </h2>
            );
          case "text":
            return content.text?.map((text, index) => (
              <p key={index} className="text-[18px] leading-[22px] mb-9">
                {text}
              </p>
            ));
          case "image":
            return (
              <figure key={index} className="pt-9 mb-[5rem]">
                <img src={content.image} alt={content.alt} />
                <figcaption className="pt-4">{content.caption}</figcaption>
              </figure>
            );
          case "list":
            return (
              <ul key={index} className="list-disc mb-9 ml-6">
                {content.list?.map((item, index) => (
                  <li key={index} className="text-[18px] leading-[22px] mb-8">
                    {Array.isArray(item) ? (
                      <ul>
                        {item.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="text-[18px] leading-[22px] mb-4"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </article>
  );
};

export default ArticleContent;
