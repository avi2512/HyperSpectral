export const FooterSection = () => {
  const productLinks = [
    { label: "Features" },
    { label: "Pricing" },
    { label: "Case studies" },
    { label: "Reviews" },
    { label: "Updates" },
  ];

  const companyLinks = [
    { label: "About" },
    { label: "Contact us" },
    { label: "Careers" },
    { label: "Culture" },
    { label: "Blog" },
  ];

  const supportLinks = [
    { label: "Getting started" },
    { label: "Help center" },
    { label: "Server status" },
    { label: "Report a bug" },
    { label: "Chat support" },
  ];

  const contactInfo = [
    {
      icon: <span className="!relative !w-5 !h-5">✉</span>,
      text: "contact@company.com",
    },
    {
      icon: <span className="!relative !w-5 !h-5">📞</span>,
      text: "(414) 687 - 5892",
    },
  ];

  return (
    <footer className="absolute top-[3345px] left-[41px] w-[1440px] h-[541px] flex">
      <div className="w-[1440px] h-[541px] relative bg-neutral-100">
        <img
          className="absolute top-0 left-0 w-[1440px] h-px object-cover"
          alt="Divider"
          src={"divider.png"}
        />

        <div className="inline-flex flex-col items-start gap-6 absolute top-[120px] left-[99px]">
          <div className="relative w-[115.6px] h-[38.15px]">
            <div className="absolute top-1 left-[47px] [font-family:'DM_Sans-Bold',Helvetica] font-bold text-neutral-800 text-[29.5px] tracking-[0] leading-[31.1px] whitespace-nowrap">
              Logo
            </div>

            <div
              className="absolute w-9 h-[38px] top-0 left-0 flex"
              aria-hidden="true"
            >
              <div className="w-[35.76px] h-[38.15px] relative">
                <img
                  className="absolute top-0 left-0 w-4 h-[38px]"
                  alt=""
                  src={"rectangle4483"}
                />

                <img
                  className="absolute top-0 left-[18px] w-[17px] h-[18px]"
                  alt=""
                  src={"rectangle4484"}
                />

                <img
                  className="absolute top-5 left-[18px] w-[17px] h-[18px]"
                  alt=""
                  src={"rectangle4485"}
                />
              </div>
            </div>
          </div>

          <p className="relative w-[310.36px] font-paragraph-default font-[number:var(--paragraph-default-font-weight)] text-neutral-600 text-[length:var(--paragraph-default-font-size)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] [font-style:var(--paragraph-default-font-style)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
          </p>

          <img
            className="relative flex-[0_0_auto]"
            alt="Social media links"
            src={"socialMediaContainer"}
          />
        </div>

        <img
          className="absolute top-[461px] left-[99px] w-[1241px] h-px object-cover"
          alt=""
          src={"line135.png"}
        />

        <nav className="absolute top-[120px] left-[490px] w-[108px] h-[234px] flex">
          <div className="w-[108px] h-[234px] relative inline-flex flex-col items-start gap-10">
            <h3 className="relative w-fit mt-[-1.00px] font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-neutral-800 text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] whitespace-nowrap [font-style:var(--text-single-300-bold-font-style)]">
              Product
            </h3>

            <ul className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
              {productLinks.map((link, index) => (
                <li
                  key={index}
                  className="inline-flex items-start relative flex-[0_0_auto]"
                >
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
                  >
                    <span className="font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-neutral-600 text-[length:var(--text-single-200-regular-font-size)] text-center leading-[var(--text-single-200-regular-line-height)] whitespace-nowrap relative w-fit mt-[-1.00px] tracking-[var(--text-single-200-regular-letter-spacing)] [font-style:var(--text-single-200-regular-font-style)]">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="absolute top-[120px] left-[693px] inline-flex flex-col items-start gap-10">
          <h3 className="relative w-fit mt-[-1.00px] font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-neutral-800 text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] whitespace-nowrap [font-style:var(--text-single-300-bold-font-style)]">
            Company
          </h3>

          <ul className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
            {companyLinks.map((link, index) => (
              <li
                key={index}
                className="inline-flex items-start relative flex-[0_0_auto]"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
                >
                  <span className="relative w-fit mt-[-1.00px] font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-neutral-600 text-[length:var(--text-single-200-regular-font-size)] text-center tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] whitespace-nowrap [font-style:var(--text-single-200-regular-font-style)]">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="inline-flex flex-col items-start gap-10 absolute top-[120px] left-[882px]">
          <h3 className="relative w-fit mt-[-1.00px] font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-neutral-800 text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] whitespace-nowrap [font-style:var(--text-single-300-bold-font-style)]">
            Support
          </h3>

          <ul className="inline-flex flex-col items-start gap-[18px] relative flex-[0_0_auto]">
            {supportLinks.map((link, index) => (
              <li
                key={index}
                className="inline-flex items-start relative flex-[0_0_auto]"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
                >
                  <span className="relative w-fit mt-[-1.00px] font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-neutral-600 text-[length:var(--text-single-200-regular-font-size)] text-center tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] whitespace-nowrap [font-style:var(--text-single-200-regular-font-style)]">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute top-[120px] left-[1113px] w-[227px] h-52 flex flex-col">
          <div className="w-[118px] h-[22px] relative inline-flex flex-col items-start gap-10">
            <h3 className="relative w-fit mt-[-1.00px] font-text-single-300-bold font-[number:var(--text-single-300-bold-font-weight)] text-neutral-800 text-[length:var(--text-single-300-bold-font-size)] tracking-[var(--text-single-300-bold-letter-spacing)] leading-[var(--text-single-300-bold-line-height)] whitespace-nowrap [font-style:var(--text-single-300-bold-font-style)]">
              Contacts us
            </h3>
          </div>

          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="inline-flex w-auto h-5 relative mt-[42px] first:mt-[42px] [&:not(:first-child)]:mt-[22px] items-start"
            >
              <a
                href="#"
                className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]"
              >
                {contact.icon}
                <span className="relative w-fit mt-[-1.00px] font-text-single-200-regular font-[number:var(--text-single-200-regular-font-weight)] text-neutral-600 text-[length:var(--text-single-200-regular-font-size)] text-center tracking-[var(--text-single-200-regular-letter-spacing)] leading-[var(--text-single-200-regular-line-height)] whitespace-nowrap [font-style:var(--text-single-200-regular-font-style)]">
                  {contact.text}
                </span>
              </a>
            </div>
          ))}

          <address className="inline-flex w-[225.62px] h-[60px] relative mt-[22px] items-start gap-2 not-italic">
            <div className="relative w-5 h-[25.7px]">
              <span className="!absolute !top-1.5 !left-0 !w-5 !h-5">📍</span>
            </div>

            <p className="relative w-[197.62px] mt-[-1.00px] font-paragraph-default font-[number:var(--paragraph-default-font-weight)] text-neutral-600 text-[length:var(--paragraph-default-font-size)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] [font-style:var(--paragraph-default-font-style)]">
              794 Mcallister St
              <br />
              San Francisco, 94102
            </p>
          </address>
        </div>

        <div className="absolute top-[487px] left-[109px] w-[1222px] h-[30px] flex gap-[455.5px]">
          <p className="w-[281px] h-[30px] font-paragraph-default font-[number:var(--paragraph-default-font-weight)] text-neutral-600 text-[length:var(--paragraph-default-font-size)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] whitespace-nowrap [font-style:var(--paragraph-default-font-style)]">
            Copyright © 2022 BRIX Templates
          </p>

          <p className="w-[481px] h-[30px] [font-family:'DM_Sans-Regular',Helvetica] font-normal text-transparent text-lg text-right tracking-[0] leading-[30px] whitespace-nowrap">
            <span className="text-[#6e6b8f] font-paragraph-default [font-style:var(--paragraph-default-font-style)] font-[number:var(--paragraph-default-font-weight)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] text-[length:var(--paragraph-default-font-size)]">
              All Rights Reserved |{" "}
            </span>

            <a href="#" className="text-[#4a3aff] underline">
              Terms and Conditions
            </a>

            <span className="text-[#6e6b8f] font-paragraph-default [font-style:var(--paragraph-default-font-style)] font-[number:var(--paragraph-default-font-weight)] tracking-[var(--paragraph-default-letter-spacing)] leading-[var(--paragraph-default-line-height)] text-[length:var(--paragraph-default-font-size)]">
              {" "}
              |{" "}
            </span>

            <a href="#" className="text-[#4a3aff] underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};