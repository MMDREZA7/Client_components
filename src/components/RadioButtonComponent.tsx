import React from "react";

interface RadioButtonComponentProps {
  title: string;
  name: string;
  onClick: (e: any) => void;
}

const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({
  title,
  name,
  onClick,
}) => {
  return (
    <div
      className="flex gap-1 items-center text-sm cursor-pointer"
      onClick={onClick(e.targte.value)}
    >
      <input type="radio" name={name} value={"dynamicDate"} />
      {title ?? "Default Title"}
    </div>
  );
};

export default RadioButtonComponent;
