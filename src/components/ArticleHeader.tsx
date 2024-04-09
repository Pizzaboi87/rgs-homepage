import Link from "next/link";

import { ArticleType } from "@/types/types";
import { FC } from "react";

type Props = {
  article: ArticleType;
};

const ArticleHeader: FC<Props> = ({ article }) => {
  const {
    articleBg,
    authorFirstName,
    authorLastName,
    authorImage,
    title,
    date,
    hashTags,
  } = article || {};

  return (
    <section
      className="w-full h-[500px] bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${articleBg})` }}
    >
      <div className="bg-[#00000080] w-full h-full flex flex-col justify-end pb-10">
        <div className="w-full custom-container">
          {authorImage && authorFirstName && authorLastName && (
            <div className="flex items-center gap-2 mb-[22px]">
              <div className="w-[50px] h-[50px] rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={authorImage}
                  alt="Author"
                />
              </div>
              <p className="font-[500] text-[20px] leading-[22px]">
                {authorFirstName} {authorLastName}
              </p>
            </div>
          )}
          <p className="font-[500] -mb-[2px]">{date}</p>
          <h1 className="largetitle">{title}</h1>
          <ul className="flex flex-wrap gap-2 font-[500] xl:text-[22px] text-[18px] leading-[26px] mt-6">
            {hashTags?.map((tag, index) => (
              <li key={index}>
                <Link
                  href={{
                    pathname: "../impact-stories",
                    query: { tag: tag },
                  }}
                  className="hover:text-active cursor-pointer"
                >
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeader;
