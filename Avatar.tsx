import React from 'react';
import { clsx } from 'clsx';
import { ShieldCheck } from 'lucide-react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isVerified?: boolean;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  isVerified = false,
  className,
}) => {
  const sizes = {
    sm: 'w-7 h-7 rounded-xl',
    md: 'w-10 h-10 rounded-2xl',
    lg: 'w-14 h-14 rounded-2xl',
    xl: 'w-20 h-20 rounded-3xl',
  };

  return (
    <div className="relative inline-block">
      <img
        src={src}
        alt={alt}
        className={clsx('object-cover ring-2 ring-renza-yellow-400 shadow-sm', sizes[size], className)}
      />
      {isVerified && (
        <span className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-renza-yellow-400 text-black shadow-sm">
          <ShieldCheck className="w-3 h-3" />
        </span>
      )}
    </div>
  );
};
