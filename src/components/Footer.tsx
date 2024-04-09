import Link from "next/link";

import { footerLinks, socials } from "@/data/pageData";

const Footer = () => {
  return (
    <footer className="bg-darkBackground pt-[32px]">
      <div className="custom-container grid grid-cols-12 xl:grid-rows-3">
        <div className="xl:col-span-6 col-span-12 flex flex-start">
          <Link className="font-[1.25rem] whitespace-nowrap" href="/">
            <img
              src="https://dg8026t2w8m53.cloudfront.net/64053/1647963723-white-rgs-logo.png"
              alt="logo"
              className="w-[160px] h-auto max-w-[100%]"
            />
          </Link>
        </div>
        <ul className="text-white xl:col-span-6 col-span-12 inline-flex xl:flex-row flex-col xl:justify-end justify-between xl:items-center -mt-2">
          {footerLinks.map((link, index) => (
            <li className="mt-8 xl:mt-0" key={index}>
              <Link className="footer-link" href={link.link}>
                {link.text}
              </Link>
            </li>
          ))}
          <li className="mt-8 xl:mt-0">
            <Link
              href="mailto:sales@rgsciences.com?subject=Interested%20in%20RGS%20RIFT"
              className="nav--button-footer py-[13px] px-[24px]"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <hr className="col-span-12 opacity-[0.25] mt-[28px] mb-0 xl:mb-0" />
        <div className="text-white col-span-12 flex xl:flex-row flex-col-reverse justify-between xl:-mt-[14px] mt-4 gap-1 xl:gap-0 pb-8">
          <div className="flex justify-start align-top">
            <p className="text-[16px]">
              Copyright 2024 Richmond Global Sciences
            </p>
          </div>
          <div className="flex xl:justify-end align-top pr-[1.25rem] -ml-5 xl:ml-0">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  src={social.icon}
                  alt="Social"
                  className="ml-[1rem] pb-[0.5rem] w-[33px] h-[33px]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
