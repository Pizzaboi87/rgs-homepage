import { TagProps } from "@/types/types";
import { FC } from "react";

export const Tag: FC<TagProps> = ({ tag, handleTagClick }) => {
  return (
    <button
      className="cursor-pointer bg-[rgba(0,0,0,.2)] px-4 py-[10px] rounded-lg flex gap-1 items-center"
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleTagClick(event, tag)
      }
    >
      <p className="text-[14px]">{tag}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    </button>
  );
};
