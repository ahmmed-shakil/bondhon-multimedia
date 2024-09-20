import ContentLayout from "../../layouts/navbar/ContentLayout";

const Shop = () => {
  return <div>Shop</div>;
};

Shop.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Shop;
