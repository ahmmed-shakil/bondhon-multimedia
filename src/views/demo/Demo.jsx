import ContentLayout from "../../layouts/navbar/ContentLayout";

const Demo = () => {
  return <div>demo</div>;
};

Demo.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Demo;
