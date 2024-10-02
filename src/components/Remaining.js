import { useEffect } from "react";
import Progressbar from "./Progressbar";

export default function Remaining({ remain, budget }) {
  useEffect(() => {
    if (remain < 0) {
      alert("You have exceeded the budget limit.");
    }
  }, [remain]);

  return (
    <>
      <div className="md:flex md:justify-between md:px-24 mt-7">
        <div className="flex justify-center items-center ">
          <h1 className="mt-8 py-3 px-10 font-semibold lg:text-2xl rounded-3xl sm:rounded-2xl bg-[#9CADFF] ">
            Remaining Budget: {remain}
          </h1>
        </div>
        <Progressbar remain={remain} budget={budget} />
      </div>
    </>
  );
}
