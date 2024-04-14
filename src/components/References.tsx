import Link from "next/link";

import { ReferenceType } from "@/types/types";
import { FC } from "react";

type Props = {
  references?: ReferenceType[] | [];
};

const References: FC<Props> = ({ references }) => {
  return (
    <section className="custom-container xl:max-w-[70%] mt-60">
      <ul className="border-t-2 pt-4">
        {references?.map((reference, index) => (
          <li key={index} className="text-[18px] leading-[22px] mb-9">
            <span>
              {reference.reference}
              {reference.link ? ", available at: " : ""}
            </span>
            <Link
              href={reference.link}
              target="_blank"
              rel="noreferrer"
              className="break-words"
            >
              {reference.link}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default References;
