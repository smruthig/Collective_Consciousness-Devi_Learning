import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import AdminNav from "./components/AdmNavbars/AdminNav";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <AdminNav sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main/>
     
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;