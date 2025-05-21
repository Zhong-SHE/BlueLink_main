import React from 'react';

interface BadgeProps {
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="w-fit h-fit inline-block bg-[#14B8A6]/10 text-[#2DD4BF] text-xs font-semibold px-3 py-1 rounded-full">
      {label}
    </span>
  );
};

export default Badge;
