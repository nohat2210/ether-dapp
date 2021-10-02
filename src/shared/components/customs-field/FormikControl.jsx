import React from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import SelectField from './SelectField';
import TextAreaField from './TextAreaField';
import CheckBoxField from './CheckBoxField';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <InputField {...rest} />;
    case 'select':
      return <SelectField {...rest} />;
    case 'textarea':
      return <TextAreaField {...rest} />;
    case 'checkbox':
      return <CheckBoxField {...rest} />;
    default:
      return null;
  }
}

FormikControl.propsTypes = {
  control: PropTypes.string,
  rest: PropTypes.object,
};

export default FormikControl;
