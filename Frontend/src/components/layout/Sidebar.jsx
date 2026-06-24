import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

import {
  LayoutDashboard,
  Users,
  UserPlus,
  Armchair,
   CreditCard,
  Receipt,
  FileText,
  LogOut,
  Menu,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Students",
    icon: Users,
    path: "/students",
  },
  {
    name: "Enrollments",
    icon: UserPlus,
    path: "/enrollments",
  },
  {
    name: "Seat Management",
    icon: Armchair,
    path: "/seats",
  },
   {
    name: "Payments",
    icon: CreditCard,
    path: "/payments",
  },
  {
    name: "Invoices",
    icon: Receipt,
    path: "/invoices",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/reports",
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
 const { logout } = useAuth();
  const navigate = useNavigate();

const handleLogout = () => {
  logout();
  navigate("/register");
};
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-slate-900 text-white transition-all duration-300 z-50 flex flex-col ${
        sidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {sidebarOpen && (
          <h1 className="text-xl font-bold">
            StudySphere
          </h1>
        )}

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded hover:bg-blue-500"
        >
          <Menu size={22} />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-500"
            >
              <Icon size={20} />

              {sidebarOpen && (
                <span>{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-red-400 hover:bg-slate-800"
        >
          <LogOut size={20} />

          {sidebarOpen && (
            <span>Logout</span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;