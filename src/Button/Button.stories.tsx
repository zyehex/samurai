import React, { FC } from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default { title: 'Button', component: Button, decorators: [withKnobs] };

export const WithText: FC = () => (
  <Button onClick={action('click')} name={text('Name', 'My Button')} />
);
