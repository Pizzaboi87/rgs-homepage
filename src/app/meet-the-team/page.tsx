"use client";

import useIsDesktop from "@/utils/useIsDesktop";
import Link from "next/link";

import { sectionTexts, team } from "@/data/pageData";

const Team = () => {
  const isDesktop = useIsDesktop();

  return (
    <main>
      <section className="custom-container xl:pt-[100px] pt-[50px] mb-10">
        <h1 className="title mb-4">{sectionTexts.team.title}</h1>
        <p className="subtitle--wm mb-4">{sectionTexts.team.textFirst}</p>
        <p className="subtitle--wm">{sectionTexts.team.textSecond}</p>
      </section>

      <section className="custom-container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative xl:pb-40 pb-20">
        {team.map((member, index) => (
          <Link
            data-aos="fade-up"
            data-aos-delay={
              isDesktop
                ? index < 3
                  ? index * 250
                  : Math.floor(index / 3) * 250 + (index % 3) * 250
                : 0
            }
            href={`meet-the-team/${member.slug}`}
            key={index}
            className="bg-no-repeat aspect-square bg-cover bg-center flex flex-col justify-end cursor-pointer hover:scale-[1.025] transition-transform duration-700 ease-in-out"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div className="bg-[#5ab163cc] p-6">
              <h2 className="font-[500] text-[22px] -mb-2 text-clip">
                {member.name}
              </h2>
              <p className="">{member.position}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Team;
