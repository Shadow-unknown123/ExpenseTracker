export default function ExpenseList({ expenses, setExpenses }) {
  const removeit = (id) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const listItems = expenses.map((item) => (
    <li
      className="bg-[#494557] mt-6 w-[90%] md:w-[95%] 2xl:w-[98%] rounded-lg py-3 md:py-4 2xl:py-5 2xl:rounded-xl"
      key={item.id}
    >
      <div className="flex justify-evenly items-center">
        <h1 className="text-center font-semibold rounded-xl bg-[#D8FBFF] w-20 md:text-lg md:py-2 md:min-w-32 lg:min-w-36 2xl:py-4 2xl:min-w-60">
          {item.name}
        </h1>
        <h1 className="text-center font-semibold rounded-xl bg-[#D8FBFF] w-20 md:text-lg md:py-2 md:min-w-32 lg:min-w-36 2xl:py-4 2xl:min-w-60">
          ${item.price}
        </h1>
        <h1 className="text-center font-semibold rounded-xl bg-[#D8FBFF] w-20 md:text-lg md:py-2 md:min-w-32 lg:min-w-36 2xl:py-4 2xl:min-w-60">
          {item.date}
        </h1>
        <h1 className="text-center font-semibold rounded-xl bg-[#D8FBFF] w-20 md:text-lg md:py-2 md:min-w-32 lg:min-w-36 2xl:py-4 2xl:min-w-60">
          {item.catagory}
        </h1>
        <button
          className="bg-[#FFABAC] text-xs md:text-base lg:text-base 2xl:text-lg px-1 py-[2px] rounded-xl border border-black font-semibold 2xl:font-bold md:py-1 md:px-4 2xl:py-2 2xl:px-7"
          onClick={() => removeit(item.id)}
        >
          Remove
        </button>
      </div>
    </li>
  ));

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[96%] md:w-[95%] md:px-7 lg:w-[90%] h-[550px] bg-[#7B80B9] rounded-xl mt-8 overflow-auto no-scrollbar mb-7">
          <div className="flex justify-center items-center flex-col">
            <input
              className="sticky top-0 mt-7 w-[95%] md:w-[97%] 2xl:w-[99%] rounded-xl py-3 px-3 text-lg lg:text-2xl md:py-4 2xl:py-5 bg-[#AEB0FF] bg-[url('icons/Search.png')] bg-[length:32px_32px] bg-[position:14px_center] bg-no-repeat pl-14 "
              type="text"
              placeholder="Search"
            />
            <div className="w-full flex justify-center items-center">
              <ul className="w-full flex justify-center items-center flex-col ">
                {listItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
