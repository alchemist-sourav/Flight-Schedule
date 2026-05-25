import React, { useState } from 'react';

import BpkCalendar, { CALENDAR_SELECTION_TYPE } from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkButton from '@skyscanner/backpack-web/bpk-component-button';

import { format } from 'date-fns';
import './App.css';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = date => format(date, 'MMMM yyyy');
const daysOfWeek = [
  { name: 'Sunday', nameAbbr: 'Sun', index: 0, isWeekend: true },
  { name: 'Monday', nameAbbr: 'Mon', index: 1, isWeekend: false },
  { name: 'Tuesday', nameAbbr: 'Tue', index: 2, isWeekend: false },
  { name: 'Wednesday', nameAbbr: 'Wed', index: 3, isWeekend: false },
  { name: 'Thursday', nameAbbr: 'Thu', index: 4, isWeekend: false },
  { name: 'Friday', nameAbbr: 'Fri', index: 5, isWeekend: false },
  { name: 'Saturday', nameAbbr: 'Sat', index: 6, isWeekend: true },
];

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <div className="app-container">
      <div className="flight-card">
        <div className="header-section">
          <h1 className="header-title">Flight Schedule</h1>
          <p className="header-subtitle">Select your departure date</p>
        </div>

        <div className="selected-date-display">
          <div>
            <div className="date-label">Departure</div>
            <div className="date-value">{formatDateFull(selectedDate)}</div>
          </div>
          {/* Optional Icon could go here */}
        </div>

        <div className="calendar-wrapper">
          <BpkCalendar
            id="calendar"
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={{ type: 'single', date: selectedDate }}
          />
        </div>

        <div className="action-section">
          <BpkButton onClick={() => alert(`Continue clicked for ${formatDateFull(selectedDate)}`)}>
            Continue
          </BpkButton>
        </div>
      </div>
    </div>
  );
}

export default App;