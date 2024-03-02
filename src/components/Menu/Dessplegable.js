import React, { useState } from 'react';

function DropdownMenu({ title, options = [] }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='dropdown' onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
      <h3>{title}</h3>
      {showMenu && (
        <div className='dropdown-content'>
          {options.map((option, index) => (
            <h3 key={index}>{option}</h3>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;





