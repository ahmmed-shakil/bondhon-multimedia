import ContentLayout from "../../layouts/navbar/ContentLayout";

const Circulars = () => {
  return <div>Circulars</div>;
};

Circulars.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Circulars;
