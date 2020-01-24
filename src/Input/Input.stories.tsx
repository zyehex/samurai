import React, { FC } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Input from './Input';
import { action } from '@storybook/addon-actions';

export default { title: 'Input', component: Input, decorators: [withKnobs] };

export const WithoutLabel: FC = () => <Input />;

export const WithLabel: FC = () => <Input label={text('Label', 'Email')} />;

export const ControlledInput: FC = () => (
  <Input value={text('Value', 'Hello world')} onChange={action('On Change')} />
);
