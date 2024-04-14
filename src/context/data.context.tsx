"use client";

import Error from "@/app/error";
import Loading from "@/components/Loading";
import useSWR from "swr";

import {
  AllPortfolioType,
  DataContextType,
  PortfolioType,
} from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext<DataContextType>({
  allPortfolio: {},
  firstSelector: null,
  setFirstSelector: () => {},
  secondSelector: null,
  setSecondSelector: () => {},
  options: [],
  updatePortfolio: () => {},
  firstPortfolio: [],
  secondPortfolio: [],
  firstYears: [],
  secondYears: [],
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [allPortfolio, setAllPortfolio] = useState<AllPortfolioType>({});

  const [firstSelector, setFirstSelector] = useState<string | null>(null);
  const [firstPortfolio, setFirstPortfolio] = useState<PortfolioType[]>([]);
  const [firstYears, setFirstYears] = useState<number[]>([]);

  const [secondSelector, setSecondSelector] = useState<string | null>(null);
  const [secondPortfolio, setSecondPortfolio] = useState<PortfolioType[]>([]);
  const [secondYears, setSecondYears] = useState<number[]>([]);

  // Fetch data from the API and store it in the context
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading, mutate } = useSWR("api/portfolio", fetcher);

  useEffect(() => {
    if (data) {
      setAllPortfolio(data);
    }
  }, [data]);

  if (isLoading) return <Loading />;
  else if (error) return <Error error={error} reset={mutate} />;

  // Create options for the dropdowns
  const options = allPortfolio
    ? Object.keys(allPortfolio)
        .filter((key) => key !== firstSelector && key !== secondSelector)
        .map((key) => ({
          value: key,
          label: key,
        }))
    : [];

  // Create the first and second portfolio data
  const updatePortfolio = (selector: string, isFirst: boolean) => {
    if (selector && allPortfolio) {
      isFirst
        ? setFirstPortfolio(allPortfolio[selector])
        : setSecondPortfolio(allPortfolio[selector]);

      const uniqueYears = Array.from(
        new Set(allPortfolio[selector].map((data) => data.year))
      ).sort((a, b) => a - b);

      isFirst ? setFirstYears(uniqueYears) : setSecondYears(uniqueYears);
    }
  };

  return (
    <DataContext.Provider
      value={{
        allPortfolio,
        options,
        firstSelector,
        setFirstSelector,
        secondSelector,
        setSecondSelector,
        updatePortfolio,
        firstPortfolio,
        secondPortfolio,
        firstYears,
        secondYears,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
