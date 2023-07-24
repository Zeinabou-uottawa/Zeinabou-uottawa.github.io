import * as React from 'react';

const FormAutoComplete = ({ data, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a country...</option>
      {data.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default FormAutoComplete;
