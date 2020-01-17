import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';

export default { title: 'Button', component: Button, decorators: [withKnobs] };

export const WithText = () => (
  <Button onClick={action('click')} name={text('Name', 'My Button')} />
);
