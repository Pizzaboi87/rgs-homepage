import { PortfolioType, CompanyRevenueMap } from "@/types/types";

const getGreenCompanyRevenues = (
  portfolio: PortfolioType[]
): CompanyRevenueMap => {
  const companyRevenues: CompanyRevenueMap = {};

  portfolio.forEach((item) => {
    const {
      year,
      company_name,
      product_category_revenues,
      human_mobility,
      mental_wellbeing,
    } = item;

    if (!companyRevenues[year]) {
      companyRevenues[year] = {};
    }

    if (!companyRevenues[year][company_name]) {
      companyRevenues[year][company_name] = 0;
    }

    const shouldInclude = human_mobility || mental_wellbeing;
    if (shouldInclude && product_category_revenues > 0) {
      companyRevenues[year][company_name] += product_category_revenues;
    }
  });

  return companyRevenues;
};

export const companyRevenues = (
  portfolio: PortfolioType[],
  year: number
): { revenues: number[]; companies: string[] } => {
  const revenues: number[] = [];
  const companies: string[] = [];
  const companyRevenues = getGreenCompanyRevenues(portfolio);

  const yearData = companyRevenues[year];

  for (const company in yearData) {
    const revenue = yearData[company];
    if (revenue > 0) {
      companies.push(company);
      revenues.push(revenue);
    }
  }

  companies.sort((a, b) => yearData[b] - yearData[a]);
  const topThreeCompanies = companies.slice(0, 3);
  return {
    revenues: topThreeCompanies.map((company) => yearData[company]),
    companies: topThreeCompanies,
  };
};
