import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/Sidebar.css';
import { FiPieChart, FiCalendar, FiShoppingBag, FiBook } from 'react-icons/fi';
import useAuth from "../../hooks/useAuth";

import { FaHome } from 'react-icons/fa';

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  submenu?: { title: string; path: string; }[];
}

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded }) => {
  const location = useLocation();
  const { user } = useAuth();

  const menuItems: MenuItem[] = [
    {
      title: 'Home',
      path: '/',
      icon: <FaHome />
    }
  ];

  const privateMenuItems: MenuItem[] = [
    {
      title: 'Programa',
      path: '/programa',
      icon: <FiBook />,
      submenu: [
        { title: 'Fase 1', path: '/fase1' },
        { title: 'Fase 2 e 3', path: '/fase2' },
        { title: 'Fase 4', path: '/fase4' }
      ]
    },
    {
      title: 'Calendário',
      path: '/meal-calendar',
      icon: <FiCalendar />
    },
    {
      title: 'Compras',
      path: '/shopping-list',
      icon: <FiShoppingBag />
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <FiPieChart />
    }
  ];

  const allMenuItems = user ? [...menuItems, ...privateMenuItems] : menuItems;

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <nav className="sidebar-nav">
        {allMenuItems.map((item, index) => (
          <div key={index} className="nav-item">
            <Link 
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.title}</span>
            </Link>
            {item.submenu && isExpanded && (
              <div className="submenu">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className={`submenu-link ${location.pathname === subItem.path ? 'active' : ''}`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 