import React from "react";

interface GridLayoutComponentProps {
  title?: string;
  children?: any;
  radius?: string;
  gridCols?: string;
  gridRows?: string;
  icons?: any;
}

const GridLayoutComponent: React.FC<GridLayoutComponentProps> = ({
  title = "Default Title",
  gridCols = "3",
  gridRows = "2",
  children,
  icons,
}) => {
  return (
    <div
      className={`p-3 mt-2 w-full bg-[#d3d3d3] font-semibold text-black rounded-md`}
    >
      <div className="flex mb-5 justify-between items-center">
        {title} {icons}
      </div>

      <div
        className={`px-2 grid ${`grid-cols-${gridCols}`} ${`grid-rows-${gridRows}`} gap-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default GridLayoutComponent;
