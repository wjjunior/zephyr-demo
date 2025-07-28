import React from "react";

interface PlusIconProps {
  className?: string;
}

export const PlusIcon: React.FC<PlusIconProps> = ({
  className = "w-3 h-3",
}) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};
