import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import necessary components
import Category from "./route/catigory/catigory";
import FollowUp from "./route/followup/followUp";
import Alert from "./route/alert/Alert";
import Expedit from "./route/expedit/Expedit";
import Reassign from "./route/reassign/Reassign";
import Consult from "./route/consult/Consult";
import Forward from "./route/forward/Forward";
import ItemAccess from "./route/item-access/ItemAccess";

const App: React.FC = () => {
  const routes = [
    { name: "Category", path: "/", component: { Category } },
    { name: "Follow up", path: "/followup", component: { FollowUp } },
    { name: "Alert", path: "/alert", component: { Alert } },
    { name: "Expedit", path: "/expedit", component: { Expedit } },
    { name: "Consult", path: "/consult", component: { Consult } },
    { name: "Reassign", path: "/reassign", component: { Reassign } },
    { name: "Forward", path: "/forward", component: { Forward } },
    { name: "Item Access", path: "/itemaccess", component: { ItemAccess } },
  ];

  return (
    <div>
      <nav>
        <ul className="flex p-2 gap-2">
          {routes.map((route) => (
            <Link
              className="flex justify-center items-center bg-black py-3 px-6 text-white text-md font-bold rounded hover:bg-gray-500 duration-150"
              to={route.path}
            >
              {route.name}
            </Link>
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/followup" element={<FollowUp />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/expedit" element={<Expedit />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/reassign" element={<Reassign />} />
        <Route path="/forward" element={<Forward />} />
        <Route path="/itemaccess" element={<ItemAccess />} />
      </Routes>
    </div>
  );
};

export default App;
