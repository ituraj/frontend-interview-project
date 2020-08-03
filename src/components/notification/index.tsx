import React, { FC } from 'react';
import classnames from 'classnames';
import styles from './notification.module.scss';

interface Props {
  className?: Optional<string>;
  color?: string;
}

const Notification: FC<Props> = (props) => {
  const { className, color, ...otherProps } = props;

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
        <div>#</div>
        <div className={styles.message}>
          <h4 className={styles.title}>Title</h4>
          <p className={styles.description}>Description</p>
        </div>
        <div>x</div>
      </div>
    </div>
  );
};

export default Notification;
