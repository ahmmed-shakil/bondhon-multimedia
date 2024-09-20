const JobFilter = () => {
  return (
    <div className=" grid grid-cols-4 items-center gap-10">
      <div>
        <p className=" text-sm font-extralight">Filter By Month</p>
        <input
          type="month"
          className=" h-10 p-3 border rounded-md mt-3 w-full"
        />
      </div>
    </div>
  );
};

export default JobFilter;
