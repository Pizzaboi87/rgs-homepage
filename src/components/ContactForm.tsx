"use client";

import ReactSelect from "react-select";

import { contactOptions, sectionTexts } from "@/data/pageData";
import { ContactFormType } from "@/types/types";
import { colourStyles } from "@/utils/colourStyles";
import { useEffect, useState } from "react";

const defaultForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  interestedIn: [],
};

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [contactForm, setContactForm] = useState<ContactFormType>(defaultForm);

  const { firstName, lastName, companyName, email } = contactForm;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  //TODO: Implement handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactForm);
  };

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      companyName &&
      email &&
      contactForm.interestedIn.length > 0
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [contactForm]);

  return (
    <section className="custom-container">
      <div className="xl:py-[100px] mb-[100px] xl:mb-0">
        <div className="text-center">
          <h1 className="title mb-[1rem]">{sectionTexts.contact.title}</h1>
          <h2 className="subtitle mb-[4rem]">{sectionTexts.contact.text}</h2>
        </div>
        <div className="box-shadow-lg bg-contactBg xl:w-[66%] mx-auto rounded-[24px]">
          <form className="flex flex-col py-[2.5rem] md:px-[2.75rem] px-[0.5rem] gap-[2rem]">
            <div className="flex lg:flex-row flex-col lg:gap-[3rem] gap-[2rem]">
              <div className="flex flex-col w-full">
                <label className="ml-2">First name</label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="ml-2">Last name</label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex lg:flex-row flex-col lg:gap-[3rem] gap-[2rem]">
              <div className="flex flex-col w-full">
                <label className="ml-2">Company name</label>
                <input
                  className="input"
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="ml-2">Contact email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label className="ml-2">Interested in:</label>
              <ReactSelect
                options={contactOptions}
                isMulti
                className="text-normal input"
                styles={colourStyles}
                onChange={(selected) =>
                  setContactForm((prev) => ({
                    ...prev,
                    interestedIn: selected.map((option) => option.value),
                  }))
                }
              />
            </div>
            <button
              type="submit"
              disabled={!isDisabled}
              className={`${
                isDisabled ? "nav--button-disabled" : "nav--button"
              }  xl:w-[9.35rem] w-full py-[0.8rem] px-[0.85rem] self-end mt-[0.5rem] mb-[24px]`}
            >
              Book a demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
