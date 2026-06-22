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
         <Navbar sidebarOpen={sidebarOpen} />
       <main
  className={`pt-20 p-6 bg-slate-100 min-h-screen transition-all duration-300 ${
    sidebarOpen ? "ml-64" : "ml-20"
  }`}
>
  {children}
</main>


       </div>

    </div>
  );
};

export default DashboardLayout;