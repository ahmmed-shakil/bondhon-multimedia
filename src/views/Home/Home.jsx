import Category from "../../components/home/Category/Category";
import Contact from "../../components/home/Contact/Contact";
import Hero from "../../components/home/Hero/Hero";
import Jobs from "../../components/home/Jobs/Jobs";
import Quotes from "../../components/home/Quotes/Quotes";
import Shop from "../../components/home/Shop/Shop";
import Footer from "../../layouts/footer/Footer";
import ContentLayout from "../../layouts/navbar/ContentLayout";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="snap-container">
      <div className="snap-section">
        <Hero />
      </div>
      <div className="snap-section">
        <Category />
      </div>
      <div className="snap-section">
        <Shop />
      </div>
      <div className="snap-section">
        <Jobs />
      </div>
      <div className="snap-section">
        <Quotes />
      </div>
      <div className="snap-section">
        <Contact />
        <div className=" hidden md:block">
          <Footer />
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Home;
