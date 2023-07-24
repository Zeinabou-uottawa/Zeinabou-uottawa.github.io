import * as React from 'react';
import { Form, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';
import { Stepper } from '@progress/kendo-react-layout';
import { PersonalDetails } from './personal-details';
import { PaymentDetails } from './payment-details';
import "./form.css";
import { useHistory } from 'react-router-dom';

const stepPages = [PersonalDetails, PaymentDetails];

export const FORM_STATE = () => {
  const [step, setStep] = React.useState(0);
  const [formState, setFormState] = React.useState({});
  const [steps, setSteps] = React.useState([
    {
      label: 'Personal Details',
      isValid: undefined
    },
    {
      label: 'Payment Details',
      isValid: undefined
    }
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const isPreviousStepsValid = steps.slice(0, step).findIndex(currentStep => currentStep.isValid === false) === -1;

  const onStepSubmit = React.useCallback(event => {
    const { isValid, values } = event;
    const currentSteps = steps.map((currentStep, index) => ({
      ...currentStep,
      isValid: index === step ? isValid : currentStep.isValid
    }));
    setSteps(currentSteps);

    // Move to the next step if valid
    if (isValid) {
      setStep(prevStep => Math.min(prevStep + 1, lastStepIndex));
    }

    setFormState(values);

    // If it's the last step and all previous steps are valid, show the alert
    if (isLastStep && isPreviousStepsValid && isValid) {
      alert(JSON.stringify(values));
    }
  }, [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]);

  const onPrevClick = React.useCallback(event => {
    event.preventDefault();
    setStep(prevStep => Math.max(prevStep - 1, 0));
  }, []);

  return (
    <div className="form-wrapper">
      {/* Form component */}
      <div style={{ alignSelf: 'center', width: '480px' }}>
        <Form
          initialValues={formState}
          onSubmitClick={onStepSubmit}
          render={formRenderProps => (
            <FormElement>
              {stepPages[step]}
              <span style={{ marginTop: '40px' }} className={'k-form-separator'} />
              <div
                style={{ justifyContent: 'space-between', alignContent: 'center' }}
                className={'k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end'}
              >
                <span style={{ alignSelf: 'center' }}>Step {step + 1}</span>
                <div>
                  {step !== 0 ? (
                    <Button className='btnprev' style={{ marginRight: '16px' }} onClick={onPrevClick}>
                      Previous
                    </Button>
                  ) : undefined}
                  <Button
                    className='btnSubmit'
                    disabled={isLastStep ? !isPreviousStepsValid : false}
                    onClick={formRenderProps.onSubmit}
                  >
                    {isLastStep ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </div>
            </FormElement>
          )}
        />
      </div>
    </div>
  );
};

export default FORM_STATE;
