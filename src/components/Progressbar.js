export default function Progressbar({ remain, budget }) {
  const percentage = (remain / budget) * 100;

  return (
    <>
      <div className="flex justify-center items-center mt-6 ">
        <div className="bg-[#4B4B4B] w-80 h-5 rounded-3xl mt-10">
          <div
            className="bg-[#86FF8E] h-5 rounded-3xl relative transition-all duration-1000"
            style={{ width: `${percentage}%` }}
          >
            <span className="absolute right-0 bottom-7 bg-[#86FF8E] p-1 rounded-md">
              {[percentage.toFixed(2)]}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
