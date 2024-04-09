"use client";

import useIsScrolled from "@/utils/useIsScrolled";
import useIsDesktop from "@/utils/useIsDesktop";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { dropdownLinks } from "@/data/pageData";
import { ArrowDown } from "./Arrow";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useIsDesktop();
  const isScrolled = useIsScrolled();
  const location = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    if (isDesktop) {
      setIsVisible(false);
    } else {
      setIsVisible(false);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`${isScrolled ? "navglass" : ""} ${
        isOpen ? "h-[120vh]" : "h-[95px]"
      } text-white overflow-hidden xl:overflow-visible py-[1rem] w-full bg-transparent transition-all duration-[0.3s] sticky top-0 z-[10] flex flex-wrap items-center justify-evenly`}
    >
      <div className="custom-container flex items-center justify-between">
        <Link className="font-[1.25rem] whitespace-nowrap" href="/">
          <img
            src="https://dg8026t2w8m53.cloudfront.net/64053/1647957285-rgslogo1000250-2.png"
            alt="logo"
            className={`${
              isOpen ? "opacity-0" : "opacity-100"
            } w-[250px] h-auto max-w-[100%] xl:-mt-[0.45rem] mt-[0.25rem] duration-300 transition-all`}
          />
        </Link>

        {/* Hamburger Icon */}
        <div
          className="block xl:hidden w-[2.25rem] absolute top-[2.2rem] right-[1.8rem] cursor-pointer z-[12]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <div className="relative ml-[25px] -mt-1">
              <span className="absolute w-[3px] !h-[24px] bg-white rotate-[45deg]"></span>
              <span className="absolute w-[3px] !h-[24px] bg-white rotate-[-45deg]"></span>
            </div>
          ) : (
            <div className="flex flex-col gap-[8px] pb-2">
              <span className="!h-[0.188rem] bg-white"></span>
              <span className="!h-[0.188rem] bg-white w-[55%] ml-[45%]"></span>
              <span className="!h-[0.2rem] bg-white"></span>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div
          className={
            isDesktop
              ? "flex flex-row"
              : isOpen
              ? "mobile-nav overflow-y-scroll pb-10"
              : "mobile-nav hided"
          }
        >
          <ul className="flex xl:flex-row flex-col gap-[3.15rem] xl:gap-0 xl:0 pl-0 list-none xl:items-center">
            <li className="xl:ml-[1.5rem]">
              <Link
                className="navlink"
                href="/#about"
                onClick={handleLinkClick}
              >
                {location == "/" ? "About" : "RIFT"}
              </Link>
            </li>
            <li className="xl:ml-[1.5rem]">
              <p
                className="navlink mt-[1px]"
                onClick={() => setIsVisible(!isVisible)}
              >
                Products
                <ArrowDown
                  style={{
                    transform: `${
                      isVisible ? "rotate(180deg)" : "rotate(0deg)"
                    }`,
                  }}
                />
              </p>

              {/* Dropdown links */}
              <div
                ref={dropdownRef}
                className={`${
                  !isDesktop
                    ? isVisible
                      ? "visible"
                      : "hidden"
                    : isVisible
                    ? "visible opacity-100 dropdown"
                    : "hidden opacity-0"
                } xl:text-[1rem] text-[28px] xl:absolute xl:p-[1rem] pt-[1rem] px-[1rem] rounded-[18px] xl:w-[250px] mt-[0.75rem] ml-[2rem] transition-all duration-200`}
              >
                <ul>
                  {dropdownLinks.map((link, index) => (
                    <li key={index} className="pt-[0.5rem] mb-[1rem]">
                      <Link
                        href={link.link}
                        className="hover:text-active"
                        onClick={handleLinkClick}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other links */}
            </li>
            <li className="xl:ml-[1.5rem]">
              <Link
                href="/thematic-investing"
                className="navlink"
                onClick={handleLinkClick}
              >
                Thematic Investing
              </Link>
            </li>
            <li className="xl:ml-[1.5rem]">
              <Link
                href="/impact-stories"
                className="navlink"
                onClick={handleLinkClick}
              >
                Impact Stories
              </Link>
            </li>
            <li className="xl:ml-[1.5rem]">
              <Link
                href="/meet-the-team"
                className="navlink"
                onClick={handleLinkClick}
              >
                Team
              </Link>
            </li>
            <li className="xl:ml-[1.5rem]">
              <Link
                href="/platform"
                onClick={handleLinkClick}
                className={`${
                  isDesktop
                    ? "nav--button ml-[2rem] py-[0.75rem] px-[1.5rem]"
                    : "navlink"
                }`}
              >
                Platform
              </Link>
            </li>
          </ul>
          <div className="xl:hidden w-full flex items-center justify-center pt-[5rem] pb-[3.5rem]">
            <img src="/img/logo.svg" alt="logo" className="w-[78px] h-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
