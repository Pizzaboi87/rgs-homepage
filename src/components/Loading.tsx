const Loading = (props: { isContentLoading?: boolean }) => {
  const { isContentLoading } = props;

  if (isContentLoading) {
    return (
      <div className="md:col-span-2 h-screen flex flex-col items-center justify-start pt-10">
        <div className="flex items-center justify-center w-[10rem] h-[10rem] lds-hourglass"></div>
        <h1 className="font-[700] text-[22px] text-center mt-10">loading...</h1>
      </div>
    );
  }
  return (
    <div className="custom-container h-[calc(100vh-95px)] xl:h-screen flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-[10rem] h-[10rem] lds-hourglass"></div>
      <h1 className="font-[700] text-[22px] text-center mt-10">loading...</h1>
    </div>
  );
};

export default Loading;
