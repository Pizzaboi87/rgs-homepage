const YearSelector = (props: {
  selector: string;
  years: number[];
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { selector, years, selectedYear, setSelectedYear } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2 className="text-white text-[1rem] mb-2">
        {`Select Year For ${selector.toUpperCase().replace(/_/g, " ")}:`}
      </h2>
      <ul className="flex justify-center flex-wrap gap-x-4 gap-y-3 list-none">
        {years.map((year) => (
          <li
            key={year}
            className={`${
              year == selectedYear
                ? "text-active"
                : "text-[#555555] hover:text-[#f3f3f3]"
            } px-2 md:px-4 md:py-1 cursor-pointer bg-[#ffffff1b] rounded-xl`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearSelector;
