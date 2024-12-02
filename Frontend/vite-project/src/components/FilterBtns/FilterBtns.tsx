import React from "react";


interface FilterBtnProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterBtn: React.FC<FilterBtnProps> = ({onClick, children }) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterBtn;

// Författare: Miklós