import React from 'react';
import '../../general.css';
import {
  FaUserAstronaut,
  FaAddressCard,
  FaDog,
  FaRegEnvelope,
} from 'react-icons/fa';

function Navbar() {
  const iconStyle = { fontSize: '40px', margin: '0px', padding: '0px' };

  return (
    <div className='base'>
      <h1>Aaron Haag</h1>
      <div className='nav-container'>
        <div className='hexagonArea first'>
          <div className='hexagon '>
            <FaUserAstronaut style={iconStyle} />
            <h3>About Me</h3>
          </div>
          <div className='hexagon'>
            <FaDog style={iconStyle} />
            <h3>Projects</h3>
          </div>
          <div className='hexagon'>
            <FaAddressCard style={iconStyle} />
            <h3>Resume</h3>
          </div>
          {/* <div className='hexagon'>
            <FaRegEnvelope style={iconStyle} />
            <h3>Contact Me</h3>
          </div> */}
        </div>
        <div className='hexagonArea last'>
          <div className='hexagon'>
            <FaRegEnvelope style={iconStyle} />
            <h3>Contact</h3>
          </div>
          <div className='hexagon'>
            <FaDog style={iconStyle} />
            <h3>Projects</h3>
          </div>
          {/* <div className='hexagon'>
            <FaAddressCard style={iconStyle} />
            <h3>Resume</h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
