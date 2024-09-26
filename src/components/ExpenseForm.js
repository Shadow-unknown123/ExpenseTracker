export default function ExpenseForm() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-96 md:w-[95%] md:px-7 lg:w-[90%] h-max bg-[#E3B5B5] rounded-xl mt-11">
          <h1 className="font-bold text-lg ps-6 pt-3 md:text-xl lg:text-2xl 2xl:text-3xl">
            Add an item
          </h1>
          <div className="py-6 flex justify-center items-center flex-col md:flex-row">
            <input
              className="rounded-xl h-10 w-64 md:w-56 md:me-3 lg:me-[5%] lg:w-72 lg:h-14"
              type="text"
            />
            <input
              className="rounded-xl h-10 w-64 mt-3 md:mt-0 md:w-44 md:me-3 lg:me-[5%] lg:w-52 lg:h-14 "
              type="text"
            />
            <input
              className="rounded-xl h-10 w-64 mt-3 md:mt-0 md:w-40 md:me-7 lg:me-[5%] lg:w-72 lg:h-14 "
              type="text"
            />
            <button className="mt-5 md:mt-0 font-semibold bg-[#9CADFF] py-2 px-12 rounded-xl border-black border lg:text-xl 2xl:text-2xl 2xl:py-1">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
