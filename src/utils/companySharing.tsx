import { PortfolioType, RevenueByCompany } from "@/types/types";

export const companySharing = (
  portfolio: PortfolioType[],
  year: number
): RevenueByCompany[] => {
  const revenueByCompanyMap: Map<string, number> = new Map();

  // Iterate through the portfolio items
  portfolio.forEach((item) => {
    if (item.year === year) {
      const companyName = item.company_name;
      const revenue = item.product_category_revenues;
      const isGreen = item.human_mobility || item.mental_wellbeing;

      // Add or update the revenue for the company
      if (revenueByCompanyMap.has(companyName)) {
        revenueByCompanyMap.set(
          companyName,
          revenueByCompanyMap.get(companyName)! + (isGreen ? revenue : -revenue)
        );
      } else {
        revenueByCompanyMap.set(companyName, isGreen ? revenue : -revenue);
      }
    }
  });

  // Convert the map to an array of RevenueByCompany objects
  const revenueByCompanyArray: RevenueByCompany[] = [];
  revenueByCompanyMap.forEach((revenue, companyName) => {
    revenueByCompanyArray.push({
      name: companyName,
      revenue: revenue,
    });
  });

  return revenueByCompanyArray;
};
