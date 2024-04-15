"use client";

import YearSelector from "@/components/YearSelector";
import Container from "@/components/Container";
import AreaCard from "@/components/AreaCard";
import ReactSelect from "react-select";
import dynamic from "next/dynamic";
import Loading from "./Loading";

import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/data.context";
import { selectStyles } from "@/utils/selectStyles";
import { sectorRevenues } from "@/utils/sectorRevenues";
import { categorySharing } from "@/utils/categorySharing";
import { geography } from "@/utils/geography";
import { companyRevenues } from "@/utils/companyRevenues";

// window object does not exist during server side rendering, so we need to import it dynamically
// to avoid window is not defined error
const TreeMap = dynamic(() => import("@/components/TreeMap"), {
  ssr: false,
});
const SemiDonutChart = dynamic(() => import("@/components/SemiDonutChart"), {
  ssr: false,
});
const DonutChart = dynamic(() => import("@/components/DonutChart"), {
  ssr: false,
});
const StackedChart = dynamic(() => import("@/components/StackedChart"), {
  ssr: false,
});
const RadialChart = dynamic(() => import("@/components/RadialChart"), {
  ssr: false,
});

const PlatformPage = () => {
  const {
    firstSelector,
    setFirstSelector,
    secondSelector,
    setSecondSelector,
    options,
    updatePortfolio,
    firstPortfolio,
    secondPortfolio,
    firstYears,
    secondYears,
  } = useContext(DataContext);

  //Set the default years for the DonutChart
  const [firstYear, setFirstYear] = useState<number>(0);
  const [secondYear, setSecondYear] = useState<number>(0);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(false);
  const [isSecondLoading, setIsSecondLoading] = useState<boolean>(false);

  useEffect(() => {
    if (firstYears) setFirstYear(firstYears[0]);
    if (secondYears) setSecondYear(secondYears[0]);
  }, [firstYears, secondYears]);

  // Handle the change of the selectors and update the portfolios
  const handleFirstSelectorChange = (selectedOption: any) => {
    setIsFirstLoading(true);
    setFirstSelector(selectedOption.value);
    updatePortfolio(selectedOption.value, true);
    setTimeout(() => {
      setIsFirstLoading(false);
    }, 2000);
  };

  const handleSecondSelectorChange = (selectedOption: any) => {
    setIsSecondLoading(true);
    setSecondSelector(selectedOption.value);
    updatePortfolio(selectedOption.value, false);
    setTimeout(() => {
      setIsSecondLoading(false);
    }, 2000);
  };

  return (
    <main className="min-h-[100vh] pt-[50px] overflow-y-hidden">
      <div className="w-full h-[40rem] overflow-hidden absolute top-0">
        <img
          src="/img/background.webp"
          alt="background"
          className="w-full h-[150%] opacity-10"
        />
      </div>
      <div className="custom-container mb-20 overflow-x-hidden">
        <h1 className="font-[700] text-[32px] md:text-[36px] leading-[30px] md:leading-[44px]">
          Please select Portfolios
        </h1>

        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-20 gap-10 mt-16">
          <ReactSelect
            options={options}
            styles={selectStyles}
            placeholder="Select Portfolio"
            onChange={handleFirstSelectorChange}
            value={
              firstSelector
                ? { value: firstSelector, label: firstSelector }
                : null
            }
          />
          <ReactSelect
            options={options}
            styles={selectStyles}
            placeholder="Select Portfolio"
            onChange={handleSecondSelectorChange}
            value={
              secondSelector
                ? { value: secondSelector, label: secondSelector }
                : null
            }
          />
          {(isFirstLoading || isSecondLoading) && <Loading isContentLoading />}
          <div>
            {firstSelector && (
              <AreaCard
                selector={firstSelector}
                portfolio={firstPortfolio}
                years={firstYears}
              />
            )}
          </div>
          <div>
            {secondSelector && (
              <AreaCard
                selector={secondSelector}
                portfolio={secondPortfolio}
                years={secondYears}
              />
            )}
          </div>
          <div>
            {firstSelector && (
              <YearSelector
                selector={firstSelector}
                years={firstYears}
                selectedYear={firstYear}
                setSelectedYear={setFirstYear}
              />
            )}
          </div>
          <div>
            {secondSelector && (
              <YearSelector
                selector={secondSelector}
                years={secondYears}
                selectedYear={secondYear}
                setSelectedYear={setSecondYear}
              />
            )}
          </div>
          <div>
            {firstSelector && (
              <Container
                selector={firstSelector}
                subtitle="Green Revenue By Economic Sector"
              >
                <SemiDonutChart
                  data={sectorRevenues(firstPortfolio, firstYear, true)}
                />
              </Container>
            )}
          </div>
          <div>
            {secondSelector && (
              <Container
                selector={secondSelector}
                subtitle="Green Revenue By Economic Sector"
              >
                <SemiDonutChart
                  data={sectorRevenues(secondPortfolio, secondYear, true)}
                />
              </Container>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            {firstSelector && (
              <Container
                selector={firstSelector}
                subtitle="Total Revenue By Economic Sector"
              >
                <DonutChart
                  data={sectorRevenues(firstPortfolio, firstYear, false)}
                />
              </Container>
            )}
          </div>
          <div className="w-full flex items-center justify-center">
            {secondSelector && (
              <Container
                selector={secondSelector}
                subtitle="Total Revenue By Economic Sector"
              >
                <DonutChart
                  data={sectorRevenues(secondPortfolio, secondYear, false)}
                />
              </Container>
            )}
          </div>
          <div>
            {firstSelector && (
              <Container
                selector={firstSelector}
                subtitle="Revenues By Product Category"
              >
                <TreeMap data={categorySharing(firstPortfolio, firstYear)} />
              </Container>
            )}
          </div>
          <div>
            {secondSelector && (
              <Container
                selector={secondSelector}
                subtitle="Revenues By Product Category"
              >
                <TreeMap data={categorySharing(secondPortfolio, secondYear)} />
              </Container>
            )}
          </div>
          <div>
            {firstSelector && (
              <Container
                selector={firstSelector}
                subtitle="Top Green Companies By Revenue"
              >
                <RadialChart
                  data={companyRevenues(firstPortfolio, firstYear)}
                />
              </Container>
            )}
          </div>
          <div>
            {secondSelector && (
              <Container
                selector={secondSelector}
                subtitle="Top Green Companies By Revenue"
              >
                <RadialChart
                  data={companyRevenues(secondPortfolio, secondYear)}
                />
              </Container>
            )}
          </div>
          <div>
            {firstSelector && (
              <Container
                selector={firstSelector}
                subtitle="Geographic Breakdown Of Revenue"
              >
                <StackedChart data={geography(firstPortfolio, firstYear)} />
              </Container>
            )}
          </div>
          <div>
            {secondSelector && (
              <Container
                selector={secondSelector}
                subtitle="Geographic Breakdown Of Revenue"
              >
                <StackedChart data={geography(secondPortfolio, secondYear)} />
              </Container>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PlatformPage;
