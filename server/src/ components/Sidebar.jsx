import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/editor', label: 'New Document' },
    { path: '/saved', label: 'Saved Docs' },
    { path: '/archived', label: 'Archived Docs' },
    { path: '/deleted', label: 'Deleted Docs' },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-100 dark:bg-gray-800 p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Astique</h2>
      <nav className="flex flex-col gap-4">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded-lg font-medium ${
              pathname === item.path
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-blue-100 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
