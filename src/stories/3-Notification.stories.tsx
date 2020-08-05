import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
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
  autoHide: {
    title: 'Give it a few seconds!',
    description: 'This notification will hide.',
  },
};

const titleStyle: Record<string, unknown> = {
  fontWeight: '600',
  fontSize: '14px',
  letterSpacing: 'normal',
  margin: '0',
  marginBottom: '0.2rem',
  color: '#191919',
};

const descriptionStyle: Record<string, unknown> = {
  fontWeight: '400',
  fontSize: '12px',
  letterSpacing: '0.3px',
  margin: '0',
  color: '#191919',
};

export const info: React.FC = () => (
  <Notification color={text('color info', '#0183fd')} iconKey="info-circle">
    <h4 style={titleStyle}>{notification.info.title}</h4>
    <p style={descriptionStyle}>{notification.info.description}</p>
  </Notification>
);

export const success: React.FC = () => (
  <Notification color={text('color success', '#0aaf7a')} iconKey="check-circle">
    <h4 style={titleStyle}>{notification.success.title}</h4>
    <p style={descriptionStyle}>{notification.success.description}</p>
  </Notification>
);

export const warning: React.FC = () => (
  <Notification
    color={text('color warning', '#fe8e00')}
    iconKey="exclamation-circle"
  >
    <h4 style={titleStyle}>{notification.warning.title}</h4>
    <p style={descriptionStyle}>{notification.warning.description}</p>
  </Notification>
);

export const error: React.FC = () => (
  <Notification color={text('color error', '#dc2626')} iconKey="times-circle">
    <h4 style={titleStyle}>{notification.error.title}</h4>
    <p style={descriptionStyle}>{notification.error.description}</p>
  </Notification>
);

export const autoHide: React.FC = () => (
  <Notification
    color={text('color regular', '#5e5d5e')}
    iconKey="pause-circle"
    mode={text('mode', 'auto-hide')}
  >
    <h4 style={titleStyle}>{notification.autoHide.title}</h4>
    <p style={descriptionStyle}>{notification.autoHide.description}</p>
  </Notification>
);

export default {
  title: 'Notification',
  decorators: [withKnobs],
};
