const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-lg mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-400">Name</a>
        </div>
        <div className="text-white text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
