const Navbar = ({sidebarOpen}) => {
  return (
    <header
  className={`fixed top-0 right-0 h-18 bg-white border-b z-40 transition-all duration-300 flex items-center justify-between  ${
    sidebarOpen ? "left-64" : "left-20"
  }`}
>

      <div>
        <h2 className="font-bold text-4xl text-blue-900 px-4">
          Hello...
        </h2>
      </div>

      <div className="flex items-center gap-4">


        

      </div>

    </header>
  );
};

export default Navbar;