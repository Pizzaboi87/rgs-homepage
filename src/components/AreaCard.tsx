import useIsDesktop from "@/utils/useIsDesktop";
import MovingCard from "./MovingCard";
import Container from "./Container";
import dynamic from "next/dynamic";

import { greenRevenues } from "@/utils/greenRevenues";
import { revenue } from "@/utils/revenue";
import { PortfolioType } from "@/types/types";

// window object does not exist during server side rendering, so we need to import it dynamically
// to avoid window is not defined error
const AreaChart = dynamic(() => import("./AreaChart"), {
  ssr: false,
});

const AreaCard = (props: {
  selector: string;
  portfolio: PortfolioType[];
  years: number[];
}) => {
  const { selector, portfolio, years } = props;

  const isDesktop = useIsDesktop();

  if (!isDesktop) {
    return (
      <Container selector={selector} subtitle="Revenues By Year In USD">
        <AreaChart
          years={years}
          totalRevenue={revenue(portfolio, years)}
          greenRevenue={greenRevenues(portfolio, years)}
        />
      </Container>
    );
  }

  return (
    <MovingCard title={selector} subtitle="Revenues By Year In USD">
      <AreaChart
        years={years}
        totalRevenue={revenue(portfolio, years)}
        greenRevenue={greenRevenues(portfolio, years)}
      />
    </MovingCard>
  );
};

export default AreaCard;
