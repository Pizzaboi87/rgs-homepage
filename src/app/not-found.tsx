import Link from "next/link";

const NotFound = () => {
  return (
    <main
      className="bg-no-repeat bg-right"
      style={{ backgroundImage: "url(/img/bg_decor.svg)" }}
    >
      <section className="custom-container pt-[100px] pb-40 grid grid-cols-3 gap-6">
        <div
          className="bg-no-repeat aspect-square bg-cover bg-center"
          style={{ backgroundImage: "url(/img/404.svg)" }}
        />
        <div className="col-span-2 flex flex-col justify-center">
          <h1 className="title mb-4">Page not found</h1>
          <p className="subtitle--wm mb-10">
            The page you are looking for may not exist.
          </p>
          <Link href="/">
            <button className="hover:text-active">Go back to home</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
