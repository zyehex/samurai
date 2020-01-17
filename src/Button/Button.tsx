import React, { FC } from 'react';

export interface ButtonProps {
  name: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: FC<ButtonProps> = ({ name, onClick }) => (
  <button onClick={onClick} type="button">
    {name}
  </button>
);

export default Button;
