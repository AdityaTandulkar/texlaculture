import React from 'react';
import './NavHorizontal.css';
import {ReactComponent as SearchSvg} from '../../Assets/search.svg';
import {ReactComponent as FlagGb} from '../../Assets/GB.svg';
import {ReactComponent as UserGroub} from '../../Assets/ic_user_group.svg';
import {ReactComponent as NotificationSvg} from '../../Assets/notification.svg';
import {ReactComponent as ProfileSvg} from '../../Assets/profile.svg';

export default function NavHorizontal() {
  return (
    <div id="nav_horizontal">
        <div className="input-wrapper">
            <input type="text" />
            <SearchSvg  className='search-icon'/>
        </div>

        <div className="nh-items-wrapper">
            <FlagGb />
            <UserGroub />
            <NotificationSvg />
            <ProfileSvg />
        </div>
    </div>
  )
}