// import Footer from "./Footer";
import PropTypes from "prop-types";
import Navbar from "./Menu";
import Footer from "../footer/Footer";

const ContentLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <div className="max-w-7xl mx-auto"> */}
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

// Add prop validation
ContentLayout.propTypes = {
  children: PropTypes.node.isRequired, // Validates that 'children' is a valid React node and is required
};

export default ContentLayout;
