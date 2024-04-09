import ContactForm from "@/components/ContactForm";
import Content from "@/components/Content";

import { productPages } from "@/data/pageData";

const Product = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;
  const selectedBranch = productPages[slug as keyof typeof productPages];

  return (
    <main>
      <section
        className="min-h-[300px] -mt-[105px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${selectedBranch.image})`,
        }}
      >
        <div className="custom-container my-auto">
          <div className="xl:pt-[250px] pt-[150px] pb-[65px] xl:max-w-[66%] max-w-[90%] mx-auto">
            <h1 className="font-[700] xl:text-[42px] md:text-[32px] text-[28px] xl:leading-[55px] leading-[32px] mb-[25px] text-center">
              {selectedBranch.title}
            </h1>
            {Array.isArray(selectedBranch.text) ? (
              selectedBranch.text.map((text, index) => (
                <h2
                  className="font-[400] text-[18px] leading-[22px] mb-8"
                  key={index}
                >
                  {text}
                </h2>
              ))
            ) : (
              <h2 className="font-[400] text-[18px] leading-[22px]">
                {selectedBranch.text}
              </h2>
            )}
          </div>
        </div>
      </section>

      <section className="custom-container relative xl:mb-[200px] mb-[50px]">
        <div
          className={`${
            selectedBranch.content[0].type === "image-with-list" ||
            selectedBranch.content[0].type === "image-with-text"
              ? "visible"
              : "hidden"
          } dashed-line`}
        />
        <div className="flex flex-col xl:gap-8 gap-2 relative pb-[50px]">
          {selectedBranch.content.map((content, index) => (
            <Content key={index} content={content} />
          ))}
        </div>
      </section>

      {selectedBranch && <ContactForm />}
    </main>
  );
};

export default Product;
