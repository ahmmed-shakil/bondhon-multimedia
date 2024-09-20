import { Link } from "react-router-dom";
import Footer from "../../layouts/footer/Footer";

const CircularsComponent = () => {
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
    <div>
      <div className=" py-10 my-10">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-semibold text-center mb-4 text-xl">
            Job & Admission Circulars
          </h3>
          <div className=" grid md:grid-cols-1 justify-between items-center gap-10 md:px-4 pt-8 px-2">
            {data?.map((c, i) => (
              <Link
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
      </div>
      <div className=" hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default CircularsComponent;
