export const Notfound = () => {
  return (
    <>
      <section className="p-6 md:flex w-full justify-center items-center">
        <div className=" p-10 md:w-2/4 text-center">
          <h1 className="font-sans m-2 font-bold  text-5xl">404 Not found</h1>
          <h3 className="font-serif font-semibold text-3xl">Sorry...</h3>
        </div>
        <img
          className=" h-auto md:w-2/4 rounded-lg justify-center items-center"
          src="https://i.pinimg.com/736x/54/dc/cd/54dccd2d2dcfc0ad9ace15432dc5ab14.jpg"
          alt=""
        />
      </section>
    </>
  );
};
