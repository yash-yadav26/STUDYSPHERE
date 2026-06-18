const Navbar = () => {
  return (
    <header className="bg-white h-16 shadow-sm flex items-center justify-between px-6">

      <div>
        <h2 className="font-semibold text-xl">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-3 py-2"
        />

        <div className="w-10 h-10 rounded-full bg-slate-300" />

      </div>

    </header>
  );
};

export default Navbar;