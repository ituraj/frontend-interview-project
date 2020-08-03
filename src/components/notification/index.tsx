import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './notification.module.scss';
import Icon from '../icon';

interface Props {
  className?: Optional<string>;
  color?: string;
  iconKey?: string;
}

const Notification: FC<Props> = (props) => {
  const { className, color, iconKey, children, ...otherProps } = props;

  const rootClass = classnames(
    {
      [styles.root]: true,
    },
    className,
  );

  const containerStyle: Record<string, unknown> = {
    borderTopColor: undefined,
  };

  if (color && color.length) {
    containerStyle.borderLeftColor = color;
  }

  return (
    <div {...otherProps} className={rootClass}>
      <div className={styles.container} style={containerStyle}>
        {!!iconKey && <Icon name={iconKey} className={styles.icon} />}
        <div className={styles.message}>{children}</div>
        <Icon name="times" className={styles.close} />
      </div>
    </div>
  );
};

export default Notification;
