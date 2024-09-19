const Category = () => {
  const data = [
    {
      title: "Pen",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Pencil",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Eraser",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Sharpener",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Notebook",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Laminate",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "File Carry Bag",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Offset Paper",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="md:h-screen snap-start snap-mandatory pb-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-center mb-4 text-xl">
          Product Categories
        </h3>
        <div className="grid md:grid-cols-6 gap-3 items-center justify-center pt-8">
          {data?.map((d, i) => (
            <div key={i} className=" flex flex-col justify-center items-center">
              <img
                src={d?.image}
                style={{ height: "180px", width: "180px", borderRadius: "50%" }}
              />
              <p className=" mt-3 font-semibold">{d?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
