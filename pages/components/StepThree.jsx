import React, { useState } from 'react';
import axios from 'axios';

function StepThree({ handleFormData, values }) {
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  function onSubmit(e) {
    e.preventDefault();
    const formData = values;

    fetch('https://getform.io/f/c1e44a2a-a5c5-49ef-98a3-83715c2c1741', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="card card--inverted">
      <div className="flex flex-col ">
        <div className="flex-1 mt-5">
          <input
            className="input__field min-w-xl "
            placeholder="www.Example.org"
            onChange={handleFormData('link')}
            value={values.link}
            onBlur={handleFormData('link')}
          />
          <span className="input__label ">Link</span>
        </div>
        <div className="flex-1 mt-5">
          <textarea
            className="input__field min-w-lg"
            onChange={(e) => setDescription(e.target.value)}
            onChange={handleFormData('description')}
            value={values.description}
            onBlur={handleFormData('description')}
            placeholder="Put any Instructions, descriptions, etc here!"
          />
          <span className="input__label"> Event Description</span>
        </div>
      </div>
      <h1 className="text-mains relative  text-3xl ">
        {' '}
        <strong className="titler "> Event Detail </strong>
      </h1>
      <button onClick={(e) => onSubmit(e)} className="submit"> Submit </button>

    </div>
  );
}
export default StepThree;
