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
    <div className="md:h-screen snap-start snap-mandatory pb-4 pt-10">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-semibold text-center mb-4 text-xl">
          Product Categories
        </h3>
        <div className="grid md:grid-cols-6 gap-3 items-center justify-center pt-8">
          {data?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center group"
            >
              <div className="relative overflow-hidden rounded-full h-44 w-44">
                <img
                  src={d?.image}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
                  alt={d?.title}
                />
              </div>
              <p className="mt-3 font-semibold">{d?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
