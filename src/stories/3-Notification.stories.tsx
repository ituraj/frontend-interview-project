import React from 'react';
import { text } from '@storybook/addon-knobs';
import Notification from '../components/notification';

const notification = {
  info: {
    title: 'Check this out!',
    description: 'This is an information notification.',
  },
  success: {
    title: 'Awesome!',
    description: 'This is a success notification.',
  },
  warning: {
    title: 'Be careful!',
    description: 'This is a warning notification.',
  },
  error: {
    title: 'Something is wrong! :(',
    description: 'This is an error notification.',
  },
};

const titleStyle: Record<string, unknown> = {
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: 'normal',
  margin: '0',
  marginBottom: '0.2rem',
};

const descriptionStyle: Record<string, unknown> = {
  fontWeight: '400',
  fontSize: '12px',
  letterSpacing: '0.3px',
  margin: '0',
};

export const info: React.FC = () => (
  <div>
    <Notification color={text('color', '#0183fd')} iconKey="info-circle">
      <h4 style={titleStyle}>{notification.info.title}</h4>
      <p style={descriptionStyle}>{notification.info.description}</p>
    </Notification>
  </div>
);

export const success: React.FC = () => (
  <div>
    <Notification color={text('color2', '#0aaf7a')} iconKey="check-circle">
      <h4 style={titleStyle}>{notification.success.title}</h4>
      <p style={descriptionStyle}>{notification.success.description}</p>
    </Notification>
  </div>
);

export const warning: React.FC = () => (
  <div>
    <Notification
      color={text('color3', '#fe8e00')}
      iconKey="exclamation-circle"
    >
      <h4 style={titleStyle}>{notification.warning.title}</h4>
      <p style={descriptionStyle}>{notification.warning.description}</p>
    </Notification>
  </div>
);

export const error: React.FC = () => (
  <div>
    <Notification color={text('color4', '#dc2626')} iconKey="times-circle">
      <h4 style={titleStyle}>{notification.error.title}</h4>
      <p style={descriptionStyle}>{notification.error.description}</p>
    </Notification>
  </div>
);

export default {
  title: 'Notification',
};
