import React, { useState } from 'react';

function StepTwo( {handleFormData, values }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="card card--inverted">
      <div className="flex flex-wrap ">
        <div className="flex-1 mt-5">
          <input
            className="input__field min-w-lg max-w-lg "
            placeholder="test@mailbox.com"
            type="email"
            onChange={handleFormData('email')}
            value={values.email}
            onBlur={handleFormData('email')}
          />
          <span className="input__label ">Email</span>
        </div>
        <div className="flex-1">
          <input
            className="input__field min-w-lg max-w-lg"
            placeholder="Organization name"
            onChange={handleFormData('organization')}
            value={values.organization}
            onBlur={handleFormData('organization')}
          />
          <span className="input__label ">Organization</span>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 ">
        <div className="flex-1">
          <input
            className="input__field mt-4 max-w-lg"
            placeholder="123-456-7890"
            onChange={handleFormData('phone')}
            value={values.phone}
            onBlur={handleFormData('phone')}
          />
          <span className="input__label ">Phone #</span>
        </div>
        <div className="flex-1">
          <input
            className="input__field mt-4 max-w-lg"
            placeholder="202 Volunteer Lane"
            onChange={handleFormData('address')}
            value={values.address}
            onBlur={handleFormData('address')}
          />
          <span className="input__label ">Address</span>
        </div>
      </div>
      <h1 className="text-mains  relative  text-3xl "> <strong className="titler2 "> Contact Info </strong></h1>
    </div>
  );
}
export default StepTwo;
