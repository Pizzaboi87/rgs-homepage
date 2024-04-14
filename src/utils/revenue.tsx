import { PortfolioType } from "@/types/types";

export const revenue = (portfolio: PortfolioType[], year: number[]) => {
  return year.map((year) => {
    return portfolio
      .filter((data: { year: number }) => data.year === year)
      .reduce((acc: number, data: { product_category_revenues: number }) => {
        return acc + data.product_category_revenues;
      }, 0);
  });
};
