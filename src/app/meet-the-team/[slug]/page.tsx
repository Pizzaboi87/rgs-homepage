import Missing from "@/components/Missing";
import Link from "next/link";

import { team } from "@/data/pageData";

const Member = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const actualMember = team.find((member) => member.slug === slug);

  if (!actualMember) return <Missing type="member" />;

  return (
    <main
      className="bg-no-repeat bg-right"
      style={{ backgroundImage: "url(/img/bg_decor.svg)" }}
    >
      <section
        className="custom-container xl:pt-[100px] pt-[50px] pb-40 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
        data-aos="fade-up"
      >
        <div
          className="bg-no-repeat aspect-square bg-cover bg-center"
          style={{ backgroundImage: `url(${actualMember.image})` }}
        />

        <div className="xl:col-span-2 flex flex-col justify-center">
          <h1 className="title mb-4">{actualMember.name}</h1>

          <p className="font-[700] text-[22px] mb-4">{actualMember.position}</p>
          {Array.isArray(actualMember.about) ? (
            actualMember.about.map((text, index) => (
              <p key={index} className="subtitle--wm mb-4">
                {text}
              </p>
            ))
          ) : (
            <p className="subtitle--wm mb-4">{actualMember.about}</p>
          )}

          <div className="flex items-center gap-6">
            {actualMember.linkedin && (
              <Link href={actualMember.linkedin}>
                <img
                  src="https://dg8026t2w8m53.cloudfront.net/64053/1647526949-linkedin.svg"
                  alt="linkedin"
                  className="cursor-pointer w-6 h-6"
                />
              </Link>
            )}
            {actualMember.twitter && (
              <Link href={actualMember.twitter}>
                <img
                  src="https://dg8026t2w8m53.cloudfront.net/64053/1647526988-twitter.svg"
                  alt="twitter"
                  className="cursor-pointer w-6 h-6"
                />
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Member;
