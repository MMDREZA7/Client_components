import React from "react";

interface RouteProps {
  name: string;
  route: string;
}

const Route: React.FC<RouteProps> = ({ name, route }) => {
  return (
    <a
      href={route}
      // href="./thirdTab/ThirdTab.tsx"
      className="bg-gray-800 text-white py-4 px-8 font-bold text-md rounded-lg"
    >
      {name}
      {/* Third Tab */}
    </a>
  );
};

export default Route;
