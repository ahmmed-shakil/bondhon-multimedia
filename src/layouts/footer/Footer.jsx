import { Link } from "react-router-dom";
import { routes } from "../../routes";

const Footer = () => {
  return (
    <div className=" bg-purple-200 py-4 flex flex-col justify-center items-center">
      <div
        className=" flex justify-center
       items-center gap-3"
      >
        {routes?.map((r, i) => (
          <Link className=" text-md hover:text-primary" key={i}>
            {r?.name}
          </Link>
        ))}
      </div>
      <div className=" mt-2 text-xs">
        &copy; 2024. BONDHON MULTIMEDIA || All rights reserved
      </div>
    </div>
  );
};

export default Footer;
