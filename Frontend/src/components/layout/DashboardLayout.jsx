import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

const DashboardLayout = ({ children }) => {
   const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar 
      sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}/>
        <div className="flex-1 flex flex-col">

        <main
        className={`bg-slate-100 min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </main>


       </div>

    </div>
  );
};

export default DashboardLayout;