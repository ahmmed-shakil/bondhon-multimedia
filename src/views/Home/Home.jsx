import Category from "../../components/home/Category/Category";
import Contact from "../../components/home/Contact/Contact";
import Hero from "../../components/home/Hero/Hero";
import Jobs from "../../components/home/Jobs/Jobs";
import Quotes from "../../components/home/Quotes/Quotes";
import Shop from "../../components/home/Shop/Shop";
import ContentLayout from "../../layouts/navbar/ContentLayout";
import "../../styles/Home.css";

const Home = () => {
  return (
    <div className="snap-mandatory snap-y">
      <Hero />
      <Category />
      <Shop />
      <Jobs />
      <Quotes />
      <Contact />
    </div>
  );
};

Home.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Home;
