export default function Header() {
  return (
    <>
      <div className="sm:flex sm:bg-[#333333] sm:justify-between sm:px-16 ">
        <div className="bg-[#333333] py-7 sm:py-8 text-white font-bold text-2xl flex justify-center items-center sm:text-4xl">
          <h1>Expense Tracker</h1>
        </div>
        <div className=" flex justify-center items-center">
          <div className="bg-[#333333] py-3 px-20 rounded-b-[14px] font-semibold text-[#74F9F9] sm:text-xl sm:text-black sm:h-3 sm:px-16  sm:py-8 sm:bg-[#74F9F9] sm:rounded-lg sm:flex sm:justify-center sm:items-center">
            Total Budget :
          </div>
        </div>
      </div>
    </>
  );
}
