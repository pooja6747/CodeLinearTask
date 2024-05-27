import React from 'react';
import logo from '../../public/public/vector.svg';
import menuIcon from '../../public/public/frame-18@2x.png';

const Header = () => {
  return (<>
    <header className="d-flex justify-content-between" style={{height:"65.97px",padding:" 0px 56.28px 20.26px 5px"}}>
      <div className="logo">
        <img src={logo} alt="Logo" className='logo-o' />
      </div>
      <div className="menu-icon">
        <img src={menuIcon} alt="Menu Icon" />
      </div>
    </header>
  </>



  );
}

export default Header;
