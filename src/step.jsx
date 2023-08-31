import Stepper from 'react-stepper-horizontal';


function Step() {
  const steps = [
    { title: 'User details' },
    { title: 'Payment' },
    { title: 'Booking confirmation' },
  ];
  const activeStep = 1;

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}/>
    </div>
  );
}

export default Step;