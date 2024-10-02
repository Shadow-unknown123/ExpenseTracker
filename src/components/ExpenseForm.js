import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      name,
      date,
      price,
      catagory,
    };
    onAddExpense(expenseData);
    //---------clearing the input fields after submition----------//
    document.getElementById("clear1").value = "";
    document.getElementById("clear2").value = "";
    document.getElementById("clear3").value = "";
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[85%] md:w-[95%] md:px-7 lg:w-[90%] h-max bg-[#E3B5B5] rounded-xl mt-11">
          <h1 className="font-bold text-lg ps-6 pt-3 md:text-xl lg:text-2xl 2xl:text-3xl">
            Add an item
          </h1>
          <form
            onSubmit={handleSubmit}
            className="py-6 flex justify-center items-center flex-col md:flex-row"
          >
            <input
              id="clear1"
              className="rounded-xl text-lg p-4 ps-5  h-10 w-64 md:w-40 md:me-[1%] lg:me-[2%] lg:w-56 2xl:w-60 lg:h-14 2xl:me-[4%]"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              id="clear2"
              className="rounded-xl text-lg p-4 ps-5 h-10 w-64 mt-3 md:mt-0 md:w-32 md:me-[1%] lg:me-[2%] lg:w-36 2xl:w-44 lg:h-14 2xl:me-[4%] "
              type="number"
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <input
              id="clear3"
              className="rounded-xl text-lg p-4 ps-5 h-10 w-64 mt-3 md:mt-0 md:w-40 md:me-[1%] lg:me-[2%] lg:w-52 lg:h-14 2xl:me-[4%]"
              type="text"
              placeholder="Date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <select
              className="rounded-xl text-sm  ps-5 h-10 w-64 mt-3 md:mt-0 md:w-40 md:me-[1%] lg:me-[2%] lg:w-52 2xl:w-60 lg:h-14 2xl:me-[4%]"
              value={catagory}
              placeholder="Catagory"
              onChange={(e) => {
                setCatagory(e.target.value);
              }}
              required
            >
              <option value="">Select a catagory</option>
              <option value="Fruit">Fruit</option>
            </select>
            <button
              className="mt-5 p-4 md:mt-0 md:ms-2 md:px-8 lg:px-12 lg:ms-0 font-semibold bg-[#9CADFF] py-2 px-12 rounded-xl border-black border lg:text-xl 2xl:text-2xl 2xl:py-1"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
