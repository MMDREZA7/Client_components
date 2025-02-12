import React from "react";

interface GridLayoutComponentProps {
  title?: string;
  children?: any;
  border?: string;
  gridCols?: string;
  gridRows?: string;
  icon?: any;
}

const GridLayoutComponent: React.FC<GridLayoutComponentProps> = ({
  title = "Default Title",
  gridCols = "3",
  gridRows = "2",
  border = "md",
  children,
  icon,
}) => {
  return (
    <div
      className={`p-2 mt-2 w-full bg-[#d3d3d3] font-semibold text-black rounded-${border}`}
    >
      <div className="flex justify-between items-center">
        {title} {icon}
      </div>
      <div
        className={`px-2 grid grid-cols-${gridCols} grid-rows-${gridRows} gap-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default GridLayoutComponent;
