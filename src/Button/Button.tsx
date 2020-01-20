import React, { FC } from 'react';
import PropTypes from 'prop-types';

export interface ButtonProps {
  /** Text to display within the button */
  name: string;
  /** Action on click */
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({ name, onClick }) => (
  <button onClick={onClick} type="button">
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Button;
