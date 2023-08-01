// eslint-disable-next-line import/no-named-as-default
import MultiStep from 'react-multistep';
// eslint-disable-next-line import/no-named-as-default
import StepOne from './components/StepOne';
// eslint-disable-next-line import/no-named-as-default
import StepTwo from './components/StepTwo';

const steps = [
  { title: 'step one', component: <StepOne /> },
  { title: 'step two', component: <StepTwo /> },
];

const prevStyle = { background: '#44afa9', position: 'relative', top:'25px'};
const nextStyle = { background: '#33c3f0' };

const multiform = () => (
  <div className="container">
    <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
    <div className="app-footer -mt-5 ml-24">
      <h6 className="text-baba ">Contact us if you have any questions! <br/> Our support email is availible at:</h6>
      <a href="https://github.com/Srdjan/react-multistep" target="_blank" rel="noreferrer" className="text-cyan-600">
        Boeing747
      </a>
    </div>
  </div>
);
export default multiform;
