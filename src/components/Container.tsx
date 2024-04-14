const Container = (props: {
  selector: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { selector, subtitle, children } = props;

  return (
    <div className="container-box">
      <h1 className="text-white font-[500] text-[1.2rem] text-center">
        {selector.toUpperCase().replace(/_/g, " ")}
      </h1>
      <h2 className="text-[1rem] text-center mb-3">{subtitle}</h2>
      {children}
    </div>
  );
};

export default Container;
