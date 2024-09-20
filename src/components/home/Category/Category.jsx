import pen from "../../../assets/images/categories/pen.jpeg";
import pencil from "../../../assets/images/categories/pencil.jpeg";
import eraser from "../../../assets/images/categories/eraser.jpg";
import sharpener from "../../../assets/images/categories/sharpener.webp";
import ruler from "../../../assets/images/categories/ruler.webp";
import fileBag from "../../../assets/images/categories/bag.jpg";
import color from "../../../assets/images/categories/color_pencil.jpeg";
import oilPastel from "../../../assets/images/categories/oil.jpg";
import paper from "../../../assets/images/categories/paper.jpg";
import offset from "../../../assets/images/categories/offset.jpg";
import noteBook from "../../../assets/images/categories/notebook.webp";
import leminate from "../../../assets/images/categories/leminate.webp";

const Category = () => {
  const data = [
    {
      title: "Pen",
      image: pen,
    },
    {
      title: "Pencil",
      image: pencil,
    },
    {
      title: "Paper",
      image: paper,
    },
    {
      title: "Eraser",
      image: eraser,
    },
    {
      title: "Sharpener",
      image: sharpener,
    },
    {
      title: "Notebook",
      image: noteBook,
    },
    {
      title: "Laminate",
      image: leminate,
    },
    {
      title: "File Carry Bag",
      image: fileBag,
    },
    {
      title: "Offset Paper",
      image: offset,
    },
    {
      title: "Ruler",
      image: ruler,
    },
    {
      title: "Color Pencil",
      image: color,
    },
    {
      title: "Oil Paster",
      image: oilPastel,
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
              <div className="relative overflow-hidden rounded-full h-44 w-44 shadow-xl">
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
