import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
      {/* Overlay to close sidebar when clicking outside */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      <div className={`sidebar-drawer ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menu</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close menu">
            <FiX />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            <li>
              <Link to="/shop?category=All" onClick={onClose} className="sidebar-link">
                View All
              </Link>
            </li>
            
            <li className="sidebar-accordion">
              <button 
                className="accordion-toggle sidebar-link" 
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Our Products {isProductsOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              <div className={`accordion-content ${isProductsOpen ? 'open' : ''}`}>
                <ul className="sub-menu">
                  <li>
                    <Link to="/shop?category=Cards" onClick={onClose} className="sidebar-sublink">
                      Cards
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop?category=Baskets" onClick={onClose} className="sidebar-sublink">
                      Baskets
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop?category=Boxes" onClick={onClose} className="sidebar-sublink">
                      Boxes
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop?category=Bouquets" onClick={onClose} className="sidebar-sublink">
                      Bouquets
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
