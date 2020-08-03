import React from 'react';
import { text } from '@storybook/addon-knobs';
import Notification from '../components/notification';

export const regular: React.FC = () => (
  <div>
    <Notification color={text('color', '#0183fd')} />
    <Notification color={text('color2', '#0aaf7a')} />
    <Notification color={text('color3', '#fe8e00')} />
    <Notification color={text('color4', '#dc2626')} />
  </div>
);

export default {
  title: 'Notification',
};
