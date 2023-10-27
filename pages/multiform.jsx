import { useState } from 'react';

// eslint-disable-next-line import/no-named-as-default
import MultiStep from 'react-multistep';
// eslint-disable-next-line import/no-named-as-default
import StepOne from '../components/components/StepOne';
// eslint-disable-next-line import/no-named-as-default
import StepTwo from '../components/components/StepTwo';
import 'react-datetime-picker/dist/DateTimePicker.css';
import StepThree from '../components/components/StepThree';
import { withProtected } from '../context/route';



const prevStyle = {
  background: '#44afa9', position: 'relative', top: '35px', padding: '0.5 rem',
};
const nextStyle = { background: '#44AFA9', top: '35px', left: '5px' };

const multiform = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    volunteer: '',
    length: '',
    dateTime: '',
    email:'',
    organization:'',
    phone:'',
    address:'',
    link:'',
    description:''
  });

  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;
    const inputValue = input === 'dateTime' ? new Date(value) : value;

    // updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: inputValue,

    }));
    console.log(formData)
  };

  const steps = [
    { title: 'step one', component: <StepOne handleFormData={handleInputData} values={formData}/> },
    { title: 'step two', component: <StepTwo handleFormData={handleInputData} values={formData} /> },
    { title: 'step three', component: <StepThree handleFormData={handleInputData} values={formData} /> },
  ];

  return(
    <div className="container relative">
      {/* eslint-disable-next-line max-len */}
      <MultiStep activeStep={0}  showTitles={false} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
      <div className="app-footer blurb absolute">
        <h6 className="text-baba ">
          Contact us if you have any questions!
          <br />
          {' '}
          Our support email is availible at:
        </h6>
        <a href="mailto:kernvolunteersunited@gmail.com" target="_blank" rel="noreferrer" className="text-cyan-600">
          kernvolunteersunited@gmail.com
        </a>
      </div>
    </div>
);
};
export default withProtected(multiform);
