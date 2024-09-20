import "../../../styles/Logo.css";
import HeroCard from "./HeroCard";

import heroAsideImg from "../../../assets/images/hero_aside.jpg";

const Hero = () => {
  const services = [
    {
      title: "Admission Apply",
    },
    {
      title: "Job Apply",
    },

    {
      title: "Printing Services",
      desc: "From documents to posters, our printing services offer high-quality prints with customizable options to meet your requirements.",
    },

    {
      title: "Lamination",
      desc: "Enhance the durability and presentation of your documents with our professional binding and lamination services.",
    },
    {
      title: "Photocopying",
      desc: "Quick and affordable photocopying solutions for your academic, professional, and personal needs.",
    },
    {
      title: "Stationary Goods",
    },
    {
      title: "Document Typing",
    },
  ];

  return (
    <div className="md:h-screen snap-start snap-mandatory">
      <div className="hero bg-purple-200 my-4">
        <div className=" min-h-[90vh] items-center justify-center max-w-7xl mx-auto grid md:grid-cols-1 p-4">
          <div className=" grid md:grid-cols-2 gap-10 justify-center items-center">
            <div className=" space-y-6">
              <h2 className="text-bold text-pretty text-primary text-3xl">
                Your One-Stop Solution: Printing and Online Services
              </h2>
              <p className=" text-sm">
                Explore our extensive collection of books and resources,
                Experience top-quality printing services tailored to your needs,
                And enjoy the convenience of our comprehensive online solutions.
                Everything you need, all in one place.
              </p>
              <div className=" grid md:grid-cols-3 gap-3">
                {services?.map((s, i) => (
                  <HeroCard key={i} data={s} />
                ))}
              </div>
            </div>

            <div className=" p-2 border-2 border-primary rounded-md">
              <img src={heroAsideImg} className=" rounded-md h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
