import Hero from "../../components/shop/Hero/Hero";
import Products from "../../components/shop/Shop/Producsts";
// import Footer from "../../layouts/footer/Footer";
import ContentLayout from "../../layouts/navbar/ContentLayout";

const Shop = () => {
  return (
    <div className=" snap-container">
      <Hero />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!4v1726809446039!6m8!1m7!1s6FXFLD4Ojup_R_W1MRM7cg!2m2!1d24.76448898045427!2d90.57043599980842!3f87.912384!4f0!5f0.7820865974627469"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className=" pb-20">
        <Products />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Shop.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Shop;
