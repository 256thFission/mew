import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';

function StepOne({ handleFormData, values }) {
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
            onChange={handleFormData('eventName')}
            value={values.eventName}
            onBlur={handleFormData('eventName')}
          />
          <span className="input__label ">Event</span>
        </div>
        <div className="flex-1">
          <input
            className="input__field min-w-lg max-w-lg"
            placeholder="5"
            type="number"
            onChange={handleFormData('volunteer')}
            value={values.volunteer}
            onBlur={handleFormData('volunteer')}
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
            onChange={handleFormData('length')}
            value={values.length}
            onBlur={handleFormData('length')}
          />
          <span className="input__label ">Length (hrs)</span>
        </div>
        <div className=" flex !justify-center z-10 pr-15%">
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
            onChange={(e) =>onChangeTime()}
            value={time}
            onBlur = {(e) => onChangeTime()}
            yearAriaLabel="Year"
            disableCalendar={true}
            className="z-20 position-relative !justify-self-center "
          />
        </div>
      </div>
      <h1 className="text-mains absolute  text-3xl ">
        {' '}
        <strong className="titler1 min-w-lg"> Basics </strong>
      </h1>
    </div>
  );
}
export default StepOne;
