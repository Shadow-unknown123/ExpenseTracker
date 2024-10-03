import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Remaining from "./components/Remaining";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [budget, setBudget] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expenses, setExpenses] = useState([]);

  //------------buffer type memory related to modal for budget-------------------------//

  let budinp;

  //Forces user to enter budget

  useEffect(() => {
    if (budget < 1) {
      alert("Please enter your total budget. ~SW");
      setIsModalOpen(true);
    }
  }, [budget]);

  //-------------------------------------------------------//

  const funcModal = () => {
    setIsModalOpen(true);
  };

  //-------------------------------------------------------//

  function addExpense(newexpense) {
    newexpense = { ...newexpense, id: Date.now() };
    setExpenses((prev) => [...prev, newexpense]);
  }

  function calcRemaining() {
    const totalExpenses = expenses.reduce(
      (acc, expense) => acc + Number(expense.price),
      0
    );
    return budget - totalExpenses;
  }

  return (
    <>
      <main>
        <Header onTotalClick={funcModal} budget={budget} />
        <Remaining remain={calcRemaining()} budget={budget} />
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} setExpenses={setExpenses} />
      </main>

      {isModalOpen && (
        <div className="fixed bg-slate-950/90 top-0 left-0 w-full h-full flex justify-center items-center ">
          <div className="rounded-2xl bg-[#BCB5E3] w-96 h-80">
            <h1 className="font-bold text-2xl ps-6 pt-6">
              Enter Total Budget{" "}
            </h1>
            <div className="py-10 flex justify-center items-center flex-col">
              <input
                onChange={(e) => {
                  budinp = e.target.value;
                }}
                className="rounded-md h-10 w-56 ps-2"
                type="text"
              />

              <button
                onClick={() => {
                  setBudget(budinp);
                  setIsModalOpen(false);
                }}
                className="mt-5 font-semibold bg-[#5CF066] py-2 px-14 rounded-lg border-black border "
              >
                Save
              </button>

              <button
                className="mt-5 font-semibold bg-[#F46A6C] py-2 px-12 rounded-lg border-black border "
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
