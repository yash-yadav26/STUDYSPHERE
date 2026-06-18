const menuItems = [
  "Dashboard",
  "Students",
  "Enrollments",
  "Seat Management",
  "Subscriptions",
  "Payments",
  "Invoices",
  "Reports",
  "Settings",
];

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        StudySphere
      </h1>

      <nav>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-800 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;