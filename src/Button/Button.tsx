import React, { FC } from 'react';

export interface ButtonProps {
  name: string;
}

const Button: FC<ButtonProps> = ({ name }) => <button>{name}</button>;

export default Button;
