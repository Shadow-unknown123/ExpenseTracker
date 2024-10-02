export default function Header({ onTotalClick, budget }) {
  return (
    <>
      <div className="sm:flex sm:bg-[#333333] sm:justify-between sm:px-16 sm:sticky sm:top-0  sm:z-10 ">
        <div className="bg-[#333333] py-7 sm:py-8 text-white font-bold sticky top-0 text-3xl flex justify-center items-center sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          <h1>Expense Tracker</h1>
        </div>
        <div className=" flex justify-center items-center">
          <div
            onClick={onTotalClick}
            className="bg-[#333333] py-3 px-20 rounded-b-[14px] font-semibold text-[#74F9F9] sm:text-xl lg:text-2xl 2xl:text-3xl sm:text-black sm:h-3 sm:px-10  sm:py-6 lg:py-7 sm:bg-[#74F9F9] sm:rounded-lg sm:flex sm:justify-center sm:items-center"
          >
            Total Budget : {budget}
          </div>
        </div>
      </div>
    </>
  );
}
