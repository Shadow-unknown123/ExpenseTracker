import { useEffect, useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");
  // ----------------------------------------------------------------------------------------------------
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

  // ----------------------------------------------------------------------------------------------------
  const [modal, setModal] = useState(false);
  // ----------------------------------------------------------------------------------------------------
  const [tempcat, settempcat] = useState("");
  const [custcat, setcustcat] = useState([]);
  // ----------------------------------------------------------------------------------------------------

  const handleaddcat = () => {
    if (tempcat === "") {
      return;
    }

    const updatedCategories = [...custcat, tempcat];
    setcustcat(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));

    document.getElementById("catinp").value = "";
  };
  // ----------------------------------------------------------------------------------------------------
  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories"));
    if (storedCategories) {
      setcustcat(storedCategories);
    } else {
      setcustcat([]);
    }
  }, []);
  // ----------------------------------------------------------------------------------------------------

  const catagorymodal = () => {
    if (modal) {
      return (
        <div className="fixed z-10 bg-slate-950/90 top-0 left-0 w-full h-full flex justify-center items-center ">
          <div className="rounded-2xl bg-[#BCB5E3] w-96 h-96">
            <h1 className="font-bold text-2xl ps-6 pt-6">Category Editor</h1>
            <div className="py-10 flex justify-center items-center flex-col">
              <input
                id="catinp"
                className="rounded-md h-10 w-56 ps-2"
                type="text"
                onChange={(e) => {
                  settempcat(e.target.value);
                }}
              />

              <button
                className="mt-10 font-semibold bg-[#5CF066] py-2 px-14 rounded-lg border-black border "
                onClick={() => {
                  handleaddcat();
                }}
              >
                Add
              </button>
              <button
                className="mt-5 font-semibold bg-[#F46A6C] py-2 px-12 rounded-lg border-black border "
                onClick={() => {
                  setModal(false);
                }}
              >
                Close
              </button>
              <button
                className="mt-5 mb-2 font-semibold bg-[#ee494c] py-2 px-2 rounded-lg border-black border "
                onClick={() => {
                  localStorage.removeItem("categories");
                }}
              >
                Wipe Categories
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      {catagorymodal()}
      <div className="flex justify-center items-center">
        <div className="w-[85%] md:w-[95%] md:px-7 lg:w-[90%] h-max bg-[#E3B5B5] rounded-xl mt-11">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-lg ps-6 pt-3 md:text-xl lg:text-2xl 2xl:text-3xl">
              Add an item
            </h1>
            <button
              onClick={() => {
                setModal(true);
              }}
              className="mt-4 me-5 md:mt-6 py-[2px]  px-2 sm:py-1 md:ms-2 md:px-4  lg:px-3 lg:ms-0 font-semibold bg-[#FCD9D9]  rounded-2xl 2xl:rounded-3xl border-black border lg:text-lg  2xl:py-1"
            >
              + Category
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-6 flex justify-center items-center flex-col md:flex-row"
          >
            <input
              id="clear1"
              className="rounded-xl text-lg p-4 ps-5  h-10 w-64 md:w-40 md:me-[1%] lg:me-[1%] lg:w-56 2xl:w-60 lg:h-14 2xl:me-[4%]"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              id="clear2"
              className="rounded-xl text-lg p-4 ps-5 h-10 w-64 mt-3 md:mt-0 md:w-32 md:me-[1%] lg:me-[1%] lg:w-36 2xl:w-44 lg:h-14 2xl:me-[4%] "
              type="number"
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
            <input
              id="clear3"
              className="rounded-xl text-lg p-4 ps-5 h-10 w-64 mt-3 md:mt-0 md:w-40 md:me-[1%] lg:me-[1%] lg:w-44 lg:h-14 2xl:w-52 2xl:me-[4%]"
              type="text"
              placeholder="Date"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
            <select
              className="rounded-xl text-sm  ps-5 h-10 w-64 mt-3 md:mt-0 md:w-40 md:me-[1%] lg:me-[1%] lg:w-52 2xl:w-60 lg:h-14 2xl:me-[4%]"
              value={catagory}
              placeholder="Catagory"
              onChange={(e) => {
                setCatagory(e.target.value);
              }}
              required
            >
              <option value="">Select or Add a catagory</option>
              {custcat.map((cur) => (
                <option>{cur}</option>
              ))}
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
