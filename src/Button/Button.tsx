import React, { FC } from 'react';

export interface ButtonProps {
  name: string;
  onClick: (...e: any) => any;
}

const Button: FC<ButtonProps> = ({ name, onClick }) => (
  <button onClick={onClick}>{name}</button>
);

export default Button;
