import React from 'react';
import { ShieldCheck, MessageSquare } from 'lucide-react';
import { Button } from './Button';

interface OwnerCardProps {
  name: string;
  avatar: string;
  rating: number;
  joinedYear: string;
  responseRate: string;
  isSuperhost?: boolean;
}

export const OwnerCard: React.FC<OwnerCardProps> = ({
  name,
  avatar,
  rating,
  joinedYear,
  responseRate,
  isSuperhost = true,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-2xl object-cover ring-2 ring-renza-yellow-400" />
        <div>
          <h4 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-1.5">
            Hosted by {name}
            {isSuperhost && <ShieldCheck className="w-4 h-4 text-renza-yellow-500" />}
          </h4>
          <p className="text-xs text-zinc-500">Host since {joinedYear} • Response: {responseRate}</p>
        </div>
      </div>
      <Button variant="outline" size="sm" leftIcon={<MessageSquare className="w-4 h-4" />}>
        Contact Host
      </Button>
    </div>
  );
};
