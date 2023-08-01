import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';

function StepOne() {
  const [eventname, setEventname] = useState('');
  const [volnum, setVolnum] = useState('');
  const [length, setLength] = useState('');
  // const [time, setTime] = useState('');
  const [time, onChangeTime] = useState(new Date());
  const [display, setDisplay] = useState('');

  const onBlur = () => {
    setDisplay(`${length} hrs`);
  };

  const onLengthChange = (e) => {
    const num = e.target.valueAsNumber;
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(num)) {
      setLength(num);
    }
  };

  return (
    <div className="card card--inverted">
      <div className="flex flex-wrap ">
        <div className="flex-1 mt-5">
          <input
            className="input__field min-w-lg max-w-lg "
            placeholder="July XYZ Drive"
            onChange={(e) => setEventname(e.target.value)}
            value={eventname}
          />
          <span className="input__label ">Event</span>
        </div>
        <div className="flex-1">
          <input
            className="input__field min-w-lg max-w-lg"
            placeholder="5"
            type="number"
            onChange={(e) => setVolnum(e.target.value)}
            value={volnum}
          />
          <span className="input__label "># of Volunteers</span>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 ">
        <div className="flex-1">
          <input
            className="input__field mt-4 max-w-lg"
            type="number"
            placeholder="5 hrs"
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <span className="input__label ">Length (hrs)</span>
        </div>
        <div className="self-start z-10">
          <DateTimePicker
            amPmAriaLabel="Select AM/PM"
            calendarAriaLabel="Toggle calendar"
            clearAriaLabel="Clear value"
            dayAriaLabel="Day"
            hourAriaLabel="Hour"
            maxDetail="minute"
            minuteAriaLabel="Minute"
            monthAriaLabel="Month"
            nativeInputAriaLabel="Date and time"
            onChange={onChangeTime}
            value={time}
            yearAriaLabel="Year"
            className="z-20 position-absolute"
          />
        </div>
      </div>
      <h1 className="text-mains   text-3xl ">
        {' '}
        <strong> Event Details </strong>
      </h1>
    </div>
  );
}
export default StepOne;
