import Tilt from "react-parallax-tilt";

import { MovingCardProps } from "@/types/types";

const MovingCard = ({ title, subtitle, children }: MovingCardProps) => {
  return (
    <Tilt
      perspective={800}
      scale={1}
      transitionSpeed={3000}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable
      glarePosition="top"
      glareMaxOpacity={0.8}
      glareColor="#71d37b"
      className="box rounded-lg flex flex-col items-center p-2 md:min-h-[25rem]"
    >
      <h1 className="text-white font-[500] text-[28px]">
        {title.toUpperCase().replace(/_/g, " ")}
      </h1>

      <h2 className="text-white text-[1rem]">{subtitle}</h2>

      {children}
    </Tilt>
  );
};

export default MovingCard;
