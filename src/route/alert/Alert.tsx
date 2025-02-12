import React from "react";
import GridLayoutComponent from "../../components/grid/GridLayoutComponent";
import GridChildComponent from "../../components/grid/GridChildComponent";

const Alert = () => {
  return (
    <div className="bg-black text-white p-52">
      <GridLayoutComponent title="Please hello">
        <div className="bg-blue-700 p-14 col-span-2">Alert</div>
        <div className="">hello</div>
      </GridLayoutComponent>
    </div>
  );
};

export default Alert;
