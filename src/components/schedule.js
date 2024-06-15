import React from 'react';
import '../App.css';

const Schedule = () => {
  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:00 AM</td>
          <td>Opening Ceremony</td>
          <td>Welcome and introduction</td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td>Workshop 1</td>
          <td>Introduction to React</td>
        </tr>
        <tr>
          <td>01:00 PM</td>
          <td>Lunch Break</td>
          <td>Networking and refreshment</td>
        </tr>
        <tr>
          <td>02:00 PM</td>
          <td>Workshop 2</td>
          <td>Advanced JavaScript</td>
        </tr>
        <tr>
          <td>04:00 PM</td>
          <td>Hackathon Begins</td>
          <td>Team formation and start hacking</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Schedule;
