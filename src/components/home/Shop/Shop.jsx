import ContentLayout from "../../../layouts/navbar/ContentLayout";
import "../../../styles/Shop.css";

const Shop = () => {
  const data = [
    {
      title: "HB Pencil",
      price: 0.5,
      placeholder_image: "https://via.placeholder.com/150?text=HB+Pencil",
    },
    {
      title: "A4 Notebook - Ruled",
      price: 2.5,
      placeholder_image:
        "https://via.placeholder.com/150?text=A4+Notebook+Ruled",
    },
    {
      title: "A4 Notebook - Unruled",
      price: 2.75,
      placeholder_image:
        "https://via.placeholder.com/150?text=A4+Notebook+Unruled",
    },
    {
      title: "A5 Notebook - Ruled",
      price: 1.75,
      placeholder_image:
        "https://via.placeholder.com/150?text=A5+Notebook+Ruled",
    },
    {
      title: "A5 Notebook - Unruled",
      price: 1.8,
      placeholder_image:
        "https://via.placeholder.com/150?text=A5+Notebook+Unruled",
    },
    {
      title: "File Carry Bag",
      price: 5.0,
      placeholder_image: "https://via.placeholder.com/150?text=File+Carry+Bag",
    },
    {
      title: "12 Inch Ruler",
      price: 0.75,
      placeholder_image: "https://via.placeholder.com/150?text=12+Inch+Ruler",
    },
    {
      title: "Blue Ink Bottle",
      price: 1.5,
      placeholder_image: "https://via.placeholder.com/150?text=Blue+Ink+Bottle",
    },
    {
      title: "Black Ink Bottle",
      price: 1.5,
      placeholder_image:
        "https://via.placeholder.com/150?text=Black+Ink+Bottle",
    },
    {
      title: "Offset Paper (Pack of 100 sheets)",
      price: 4.0,
      placeholder_image: "https://via.placeholder.com/150?text=Offset+Paper",
    },
  ];

  return (
    <div className="md:h-screen py-10 px-3 bg-purple-200">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-center mb-4 text-xl">
          Available Products
        </h3>
        <div className="grid md:grid-cols-5 gap-3 items-center justify-center pt-8">
          {data?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-center bg-white cursor-pointer rounded-md shadow-md border-2 border-primary hover:bg-primary hover:text-slate-200"
            >
              <img
                src={d?.placeholder_image}
                className="rounded-t-md"
                style={{ height: "130px", width: "100%" }}
              />
              <div className="p-2">
                {/* Tooltip and truncated title */}
                <p
                  className="font-semibold title-clamp"
                  title={d?.title} // Tooltip to show full text
                >
                  {d?.title}
                </p>
                <p className="text-sm font-semibold">Price: BDT {d?.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-10 flex justify-center">
          <button className=" border-2 border-primary bg-white shadow-md text-sm py-2 px-4 rounded-md hover:bg-primary hover:text-white">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

Shop.getLayout = (page) => {
  return <ContentLayout>{page}</ContentLayout>;
};

export default Shop;
