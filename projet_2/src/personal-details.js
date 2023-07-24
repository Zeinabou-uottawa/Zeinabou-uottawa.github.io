import * as React from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput, FormTextArea } from './form-components';
import { nameValidator, requiredValidator } from './validators';
import { countries } from './data';

import './form.css';

const fieldContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px',
};

const labelStyle = {
  width: '120px', // Adjust the width as needed
  marginRight: '10px',
};

export const PersonalDetails = (
  <div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle} htmlFor="fullName">Full Name</label>
      <Field
        key={'fullName'}
        id={'fullName'}
        name={'fullName'}
        component={FormInput}
        validator={nameValidator}
      />
    </div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle} htmlFor="countryselected">Country</label>
      <Field
        key={'countryselected'}
        id={'countryselected'}
        name={'countryselected'}
        component="select"
        validator={requiredValidator}
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </Field>
    </div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle} htmlFor="address">Address</label>
      <Field
        key={'address'}
        id={'address'}
        name={'address'}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle} htmlFor="zipCode">Zip Code</label>
      <Field
        key={'zipCode'}
        id={'zipCode'}
        name={'zipCode'}
        component={FormInput}
        validator={requiredValidator}
      />
    </div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle}></label>
      <div style={{ color: '#999', fontSize: '12px' }}>Example: K1N 2XA</div>
    </div>
    <div style={fieldContainerStyle}>
      <label style={labelStyle} htmlFor="about"></label>
      
    </div>
  </div>
);

