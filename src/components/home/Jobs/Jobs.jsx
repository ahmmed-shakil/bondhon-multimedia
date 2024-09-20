import { Link } from "react-router-dom";

const Jobs = () => {
  const data = [
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
    {
      title: "DBRT Job Circular 2024 ঢাকা বিআরটি (DBRT) নিয়োগ বিজ্ঞপ্তি",
      deadline: "27/09/2024",
      grade: 9,
    },
  ];
  return (
    <div className=" min-h-screen py-10 my-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-center mb-4 text-xl">
          Job & Admission Circulars
        </h3>
        <div className=" grid md:grid-cols-2 justify-between items-center gap-10 md:px-4 pt-8 px-2">
          {data?.map((c, i) => (
            <Link
              to={`/details/1`}
              key={i}
              className=" border border-primary bg-primary text-white shadow-sm hover:shadow-lg rounded-md p-3 hover:text-slate-200"
            >
              <p>
                {i + 1}. {c?.title}
              </p>
              <div className=" flex justify-between items-center">
                <p>Last Date: {c?.deadline}</p>
                <p>Grade: {c?.grade || "NA"}</p>
                <p>Fee: {1500}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=" mt-10 flex justify-center">
        <Link
          to={"/circulars"}
          className=" border-2 border-primary bg-white shadow-md text-sm py-2 px-4 rounded-md hover:bg-primary hover:text-white"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
