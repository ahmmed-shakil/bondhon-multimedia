import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";

const Footer = () => {
  const location = useLocation();
  return (
    <div className=" bg-purple-200 py-4 h-auto md:h-32  flex flex-col justify-center items-center">
      <div
        className=" flex justify-center
       items-center gap-3"
      >
        {routes?.map((r, i) => (
          <Link
            to={r.path}
            className={`block px-3 py-2 rounded-md text-sm font-medium ${
              location.pathname === r.path
                ? "text-primary font-semibold" // Apply background color for active link
                : "hover:text-primary"
            }`}
            key={i}
          >
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
