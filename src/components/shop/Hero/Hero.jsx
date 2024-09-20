import bg from "../../../assets/images/shop-bg.jpg";
const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" h-96"
      ></div>
    </div>
  );
};

export default Hero;
