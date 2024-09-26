export default function Progressbar() {
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="bg-[#4B4B4B] w-80 h-5 rounded-3xl mt-10">
          <div className="bg-[#86FF8E] w-40 h-5 rounded-3xl relative">
            <span className="absolute right-0 bottom-7 bg-[#86FF8E] p-1 rounded-md">
              64%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
