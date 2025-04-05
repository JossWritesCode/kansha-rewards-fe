import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  Icon: LucideIcon;
}

export default function IconWrapper({ Icon }: IconWrapperProps) {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-busyBerry">
      <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
    </div>
  );
}
