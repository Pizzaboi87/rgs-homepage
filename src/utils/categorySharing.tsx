import { PortfolioType, RevenueByCategory } from "@/types/types";

export const categorySharing = (
  portfolio: PortfolioType[],
  year: number
): RevenueByCategory[] => {
  const revenueByCategoryMap: Map<string, number> = new Map();

  // Iterate through the portfolio items
  portfolio.forEach((item) => {
    if (item.year === year) {
      const category = item.product_category;
      const revenue = item.product_category_revenues;
      const isGreen = item.human_mobility || item.mental_wellbeing;

      // Add or update the revenue for the category
      if (revenueByCategoryMap.has(category)) {
        revenueByCategoryMap.set(
          category,
          revenueByCategoryMap.get(category)! + (isGreen ? revenue : -revenue)
        );
      } else {
        revenueByCategoryMap.set(category, isGreen ? revenue : -revenue);
      }
    }
  });

  // Convert the map to an array of RevenueByCategory objects
  const revenueByCategoryArray: RevenueByCategory[] = [];
  revenueByCategoryMap.forEach((revenue, category) => {
    revenueByCategoryArray.push({
      category: category,
      revenue: revenue,
    });
  });

  return revenueByCategoryArray;
};
