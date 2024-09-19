/* eslint-disable react/prop-types */
const HeroCard = ({ data }) => {
  return (
    <div className=" bg-primary text-slate-200 p-3 shadow-lg  rounded-md">
      <h6 className=" font-semibold">{data?.title}</h6>
      {/* <p className=" text-sm">{data?.desc}</p> */}
    </div>
  );
};

export default HeroCard;
