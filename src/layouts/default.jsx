import { Outlet } from "react-router-dom";
import { Package2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span>UFO Sightings</span>
          </NavLink>
          <nav className="space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/sightings">Sightings</NavItem>
            <NavItem to="/reports">Reports</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
        </div>
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white"
      )
    }
  >
    {children}
  </NavLink>
);

export default Layout;