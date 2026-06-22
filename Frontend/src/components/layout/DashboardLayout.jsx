import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState, useEffect} from "react";

const DashboardLayout = ({ children }) => {
   const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);
  return (
    <div className="flex bg-slate-100 min-h-screen overflow-x-auto">

      <Sidebar 
      sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}/>
        <div className="flex-1 flex flex-col">
         <Navbar sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen}/>
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