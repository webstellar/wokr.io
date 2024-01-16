import { useState } from "react";
import classNames from "classnames";
import Sidebar from "../sidebar/Sidebar";
import SidebarHeader from "../header/SidebarHeader";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div
      className={classNames({
        "grid min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      <div className="bg-gray-100 text-gray-800">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={() => setSidebarCollapsed((prev) => !prev)}
          shown={showSidebar}
        />
      </div>
      <main>
        <SidebarHeader
          onMenuButtonClick={() => setShowSidebar((prev) => !prev)}
        />
        {children}
      </main>
    </div>
  );
};

export default LoggedInLayout;
