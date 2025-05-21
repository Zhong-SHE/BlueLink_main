
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon, title, description, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      'bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col gap-4 h-full',
      className
    )}>
      <div className="bg-[#092b34] rounded-lg p-4 w-12 h-12 flex items-center justify-center text-teal-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
