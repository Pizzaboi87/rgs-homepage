import { PortfolioType, SectorRevenueMap } from "@/types/types";

const getGreenSectorRevenues = (
  portfolio: PortfolioType[]
): SectorRevenueMap => {
  const sectorRevenues: SectorRevenueMap = {};

  portfolio.forEach((item) => {
    const {
      year,
      economic_sector,
      product_category_revenues,
      human_mobility,
      mental_wellbeing,
    } = item;

    if (!sectorRevenues[year]) {
      sectorRevenues[year] = {};
    }

    if (!sectorRevenues[year][economic_sector]) {
      sectorRevenues[year][economic_sector] = 0;
    }

    const shouldInclude = human_mobility || mental_wellbeing;
    if (shouldInclude && product_category_revenues > 0) {
      sectorRevenues[year][economic_sector] += product_category_revenues;
    }
  });

  return sectorRevenues;
};

const getRegularSectorRevenues = (
  portfolio: PortfolioType[]
): SectorRevenueMap => {
  const sectorRevenues: SectorRevenueMap = {};

  portfolio.forEach((item) => {
    const { year, economic_sector, product_category_revenues } = item;
    if (!sectorRevenues[year]) {
      sectorRevenues[year] = {};
    }
    if (!sectorRevenues[year][economic_sector]) {
      sectorRevenues[year][economic_sector] = 0;
    }
    sectorRevenues[year][economic_sector] += product_category_revenues;
  });

  return sectorRevenues;
};

export const sectorRevenues = (
  portfolio: PortfolioType[],
  year: number,
  isGreen: boolean
): { numbers: number[]; names: string[] } => {
  const numbers: number[] = [];
  const names: string[] = [];
  const sectorRevenues = isGreen
    ? getGreenSectorRevenues(portfolio)
    : getRegularSectorRevenues(portfolio);

  const yearData = sectorRevenues[year];

  for (const sector in yearData) {
    const revenue = yearData[sector];
    if (revenue > 0) {
      names.push(sector);
      numbers.push(revenue);
    }
  }

  return { numbers, names };
};
