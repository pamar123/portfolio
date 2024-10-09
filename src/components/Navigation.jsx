import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume"
            className={({ isActive }) => 
              isActive ? "text-blue-400" : "hover:text-blue-300"
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;