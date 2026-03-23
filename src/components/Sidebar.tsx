import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Zap, Settings, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const navItems = [
    { to: '/', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/pets', label: 'Pet List', icon: <Users size={20} /> },
    { to: '/analysis', label: 'AI Analysis', icon: <Zap size={20} /> },
    { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-[240px] h-screen bg-surface-base border-r border-neutral-200 dark:border-neutral-700 flex flex-col p-4 gap-6 sticky top-0 transition-colors duration-base">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white shrink-0">
          <Zap size={20} fill="currentColor" />
        </div>
        <h1 className="text-h3 text-neutral-900 truncate">Pet-Life AI</h1>
      </div>

      <nav className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-fast text-body-md font-medium group',
                isActive
                  ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-500'
                  : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100'
              )
            }
          >
            <span className={cn('transition-colors', 'group-hover:text-primary-500')}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 flex flex-col gap-2">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-fast text-body-md font-medium text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex items-center gap-3 p-2 bg-neutral-50 dark:bg-neutral-800 rounded-md">
        <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white text-body-sm font-bold">
          JD
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-body-sm font-bold text-neutral-900 truncate">Jane Doe</span>
          <span className="text-caption text-neutral-500 truncate">Vet Admin</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
