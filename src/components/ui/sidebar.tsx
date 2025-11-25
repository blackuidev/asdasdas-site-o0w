import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Flame, Subscriptions, Library, Menu, X } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  isActive,
  onClick,
}) => {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-3 text-lg ${isActive ? 'bg-primary/20 text-primary font-semibold' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
      onClick={onClick}
    >
      {icon}
      <span className="truncate">{text}</span>
    </Button>
  );
};

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsCollapsed(mobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarItems = [
    { icon: <Home size={24} />, text: 'Home' },
    { icon: <Flame size={24} />, text: 'Trending' },
    { icon: <Subscriptions size={24} />, text: 'Subscriptions' },
    { icon: <Library size={24} />, text: 'Library' },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 h-full w-[240px] border-r bg-background transition-transform duration-300 ease-in-out ${isCollapsed ? '-translate-x-full md:translate-x-0' : 'translate-x-0'} ${isMobile ? 'shadow-lg' : ''}`}
    >
      <div className="flex h-16 items-center justify-between px-4 md:justify-center">
        {!isCollapsed && (
          <h1 className="text-2xl font-bold text-primary">
            LightTube
          </h1>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          {isCollapsed ? <Menu size={24} /> : <X size={24} />}
        </Button>
      </div>
      <ScrollArea className="h-[calc(100%-4rem)] px-3 py-4">
        <nav className="space-y-1">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              text={item.text}
              isActive={index === 0} // Example: Home is active
              onClick={() => { /* Handle navigation */ }}
            />
          ))}
        </nav>
        <div className="mt-8 space-y-1">
          <h2 className="px-2 text-sm font-semibold uppercase text-muted-foreground">Your Channel</h2>
          <SidebarItem icon={<Library size={24} />} text="Your Videos" />
          <SidebarItem icon={<Library size={24} />} text="History" />
          <SidebarItem icon={<Library size={24} />} text="Watch Later" />
          <SidebarItem icon={<Library size={24} />} text="Liked Videos" />
        </div>
      </ScrollArea>
    </div>
  );
};
