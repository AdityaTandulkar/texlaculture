import React from 'react';
import './NavVertical.css'
import {Link} from 'react-router-dom';
import {ReactComponent as DashboardSvg} from '../../Assets/ic_dashboard.svg';
import {ReactComponent as BankingSvg} from '../../Assets/ic_banking.svg';
import {ReactComponent as RightSvg} from '../../Assets/ic_chevron_right.svg';

export default function NavVertical() {
  return (
    <div id='nav_vertical'>
      <div className="logo-container">
        <h1 className='logo'><span className='logo-fname'>Texla</span> Culture</h1>
      </div>

      <div className="links-container">
        <h2>General</h2>
        <Link to='/'><DashboardSvg /> Dashboard <RightSvg/> </Link>
        <Link to='/companies'> <BankingSvg /> Companies <RightSvg/> </Link>
        <Link to='/supporttickets'> <BankingSvg /> Support & Tickets <RightSvg/> </Link>
        <Link to='/useradmins'> <BankingSvg /> User Admins <RightSvg/> </Link>
      </div>
    </div>
  )
}
