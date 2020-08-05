import React, { FC, useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './notification.module.scss';
import Icon from '../icon';

interface Props {
  className?: Optional<string>;
  color?: string;
  iconKey?: string;
  mode?: string;
}

const Notification: FC<Props> = (props) => {
  const { className, color, iconKey, mode, children, ...otherProps } = props;
  const [open, setOpen] = useState(true);

  const handleClose = (): void => {
    setOpen(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mode === 'auto-hide') {
        setOpen(false);
      }
    }, 3000);
    return (): void => {
      clearTimeout(timeout);
    };
  }, [mode]);

  const rootClass = classnames(
    {
      [styles.notification]: true,
      [styles.notificationShow]: open,
      [styles.notificationHide]: !open,
    },
    className,
  );

  const containerStyle: Record<string, unknown> = {
    borderLeftColor: undefined,
  };

  if (color && color.length) {
    containerStyle.borderLeftColor = color;
  }

  return (
    <div {...otherProps} className={rootClass}>
      <div className={styles.container} style={containerStyle}>
        {!!iconKey && (
          <span style={{ color }}>
            <Icon name={iconKey} className={styles.icon} />
          </span>
        )}
        <div className={styles.message}>{children}</div>
        <button className={styles.btn} onClick={handleClose}>
          {mode !== 'auto-hide' && (
            <Icon name="times" className={styles.close} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Notification;
