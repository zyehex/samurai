import React, { FC } from 'react';
import { number, select, text, withKnobs } from '@storybook/addon-knobs';
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [withKnobs]
};

export const WithButton: FC = () => (
  <div style={{ padding: '2rem 5rem' }}>
    <Tooltip
      text={text('Tooltip Text', 'Hello World')}
      position={select(
        'Position',
        [
          'top',
          'left',
          'right',
          'bottom',
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'
        ],
        'bottom'
      )}
      timeout={number('Timeout', 750)}
      leaveTimeout={number('Leave timeout', 250)}
    >
      <button type="button">My Button</button>
    </Tooltip>
  </div>
);
