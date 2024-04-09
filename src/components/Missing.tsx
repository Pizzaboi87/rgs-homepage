const Missing = (props: { type: string }) => {
  const missingDetails = () => {
    switch (props.type) {
      case "article":
        return {
          title:
            "We are still working on this article, please come back later.",
          image: "/img/write.gif",
        };
      case "member":
        return {
          title: "We don't find this member, please check the link again.",
          image: "/img/missing.gif",
        };
      default:
        return {
          title: "We are still working on this page, please come back later.",
          image: "/img/construction.gif",
        };
    }
  };

  return (
    <main className="custom-container h-[calc(100vh-95px)] xl:h-screen flex flex-col items-center xl:pt-[100px] xl:justify-start justify-center">
      <img
        src={missingDetails().image}
        alt="write"
        className="xl:max-w-[25%] max-w-[50%]"
      />
      <h1 className="font-[700] text-[22px] text-center mt-10">
        {missingDetails().title}
      </h1>
    </main>
  );
};

export default Missing;
