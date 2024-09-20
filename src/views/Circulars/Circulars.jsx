import CircularsComponent from "../../components/circulars/Circulars";
import ContentLayout from "../../layouts/navbar/ContentLayout";

const Circulars = () => {
  return (
    <div className=" snap-container">
      <div className=" pb-20">
        <CircularsComponent />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

Circulars.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Circulars;
