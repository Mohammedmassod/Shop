import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="mb-6 mt-20 flex flex-col items-center bg-beige min-h-screen" >
      {children}</div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
