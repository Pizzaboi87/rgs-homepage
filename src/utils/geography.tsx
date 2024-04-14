import { PortfolioType, RevenueByCountry } from "@/types/types";

export const geography = (
  portfolio: PortfolioType[],
  year: number
): RevenueByCountry[] => {
  const revenueByCountryMap: Record<string, { normal: number; green: number }> =
    {};

  // Iterate through the portfolio items
  portfolio.forEach((item) => {
    if (item.year === year) {
      const countryName = item.dom_country;
      const revenue = item.product_category_revenues;
      const isGreen = item.human_mobility || item.mental_wellbeing;

      // Initialize country entry if not exists
      if (!revenueByCountryMap[countryName]) {
        revenueByCountryMap[countryName] = { normal: 0, green: 0 };
      }

      // Add or update the revenue for the country
      if (isGreen) {
        revenueByCountryMap[countryName].green += revenue;
      } else {
        revenueByCountryMap[countryName].normal += revenue;
      }
    }
  });

  // Convert the map to an array of RevenueByCountry objects
  const revenueByCountryArray: RevenueByCountry[] = [];
  for (const countryName in revenueByCountryMap) {
    const { normal, green } = revenueByCountryMap[countryName];
    revenueByCountryArray.push({
      country: countryName,
      normalRevenue: normal,
      greenRevenue: green,
    });
  }

  return revenueByCountryArray;
};
