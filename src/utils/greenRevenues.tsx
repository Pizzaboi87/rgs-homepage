import { PortfolioType } from "@/types/types";

export const greenRevenues = (
  portfolio: PortfolioType[],
  years: number[]
): number[] => {
  const revenuesByYear: number[] = [];

  // Initialize revenuesByYear array with 0 values for each year
  years.forEach(() => revenuesByYear.push(0));

  // Calculate revenues for each year
  portfolio.forEach((item) => {
    if (years.includes(item.year)) {
      if (item.human_mobility || item.mental_wellbeing) {
        const index = years.indexOf(item.year);
        revenuesByYear[index] += item.product_category_revenues;
      }
    }
  });

  return revenuesByYear;
};
