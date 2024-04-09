"use client";

import { sectionTexts } from "@/data/pageData";
import { useState } from "react";

const DemoForm = () => {
  const [email, setEmail] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (emailRegex.test(e.target.value)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <section className="custom-container xl:mt-[160px] mt-0 xl:mb-[200px] mb-[50px]">
      <div className="card xl:w-[66%] w-full mx-auto">
        <form className="xl:px-[1.5rem] px-[0.25rem] flex flex-col">
          <h1 className="card-title mt-[12px] mb-[28px]">
            {sectionTexts.demoForm.title}
          </h1>
          <h2 className="text-[16px] leading-[150%] mb-[28px]">
            {sectionTexts.demoForm.text}
          </h2>
          <label className="ml-2 w-full">
            Your business email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full -ml-2 input"
            />
          </label>
          <button
            type="submit"
            disabled={!isDisabled}
            className={`${
              isDisabled ? "nav--button-disabled" : "nav--button"
            }  xl:w-[9.35rem] w-full py-[0.8rem] px-[0.85rem] self-end mt-[48px] mb-[24px]`}
          >
            Book a demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
