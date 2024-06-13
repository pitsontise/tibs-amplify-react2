import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, ErrorContainer, StyledInput } from "./input.styling";

const Input = (props) => {
    const { type, label, placeholder, error} = props;

    return (
        <InputContainer>
         <div>{label}</div>
            <StyledInput
                label={label}
                type={type}
                placeholder={placeholder}
            />
            {error && <ErrorContainer>{error}</ErrorContainer>}
        </InputContainer>
    );
};

Input.defaultProps = {
    type: 'text',
    placeholder: 'Input value',
    error: undefined,
  };

Input.propTypes = {
    type: PropTypes.string,
    label:  PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    error: PropTypes.string,
  };
  

export default Input;