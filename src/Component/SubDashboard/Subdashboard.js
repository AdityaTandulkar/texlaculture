import React from 'react';
import './Subdashboard.css'
import Keyperformance from '../KeyPerformance/Keyperformance';
import Companystatus from '../CompanyStatus/Companystatus';
import Activeuser from '../Activeuser/Activeuser';
import Onboardedcompany from '../Onbordedcompany/Onboardedcompany';
import Piechart from '../Piechart/Piechart';

export default function Subdashboard() {
  return (
    <div id='subdashboard'>
      <div className="stats-wrapper">
        <Keyperformance />
        <Companystatus />
        <Activeuser />
      </div>

      <div className="onboarded-piechart-wrapper">
        <Onboardedcompany />
        <Piechart />
      </div>
    </div>
  )
}
