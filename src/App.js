import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Remaining from "./components/Remaining";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <>
      <main className="bg-[#5F5394] h-screen">
        <Header />
        <Remaining />
        <ExpenseForm />
      </main>

      {isModalOpen && (
        <div className="fixed bg-slate-950/90 top-0 left-0 w-full h-full flex justify-center items-center ">
          <div className="rounded-2xl bg-[#BCB5E3] w-96 h-80">
            <h1 className="font-bold text-2xl ps-6 pt-6">
              Enter Total Budget{" "}
            </h1>
            <div className="py-10 flex justify-center items-center flex-col">
              <input className="rounded-md h-10 w-56" type="text" />
              <button className="mt-5 font-semibold bg-[#5CF066] py-2 px-14 rounded-lg border-black border ">
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
