import React, { FC, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Tooltip.scss';

export interface ToolTipProps {
  /** React node to wrap tooltip */
  children: React.ReactNode;
  /** Timeout in ms until tooltip disappears on leave */
  leaveTimeout?: number;
  /** Position of the tooltip relative to the children */
  position?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right';
  /** Text to display within the tooltip */
  text: string;
  /** Timeout in ms until tooltip is visible on hover */
  timeout?: number;
}

const Tooltip: FC<ToolTipProps> = ({
  children,
  position = 'top',
  text,
  timeout = 750,
  leaveTimeout = 250
}) => {
  const timeoutRef = useRef(0);
  const [visible, setVisible] = useState(false);

  function enter(): void {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setVisible(true);
    }, timeout);
  }

  function leave(): void {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      if (visible) {
        setVisible(false);
      }
    }, leaveTimeout);
  }

  useEffect(() => () => clearTimeout(timeoutRef.current));

  return (
    <div className={styles.wrapper} onMouseEnter={enter} onMouseLeave={leave}>
      {visible && (
        <div
          className={cx(styles.tooltip, styles[position])}
          onMouseEnter={enter}
        >
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  leaveTimeout: PropTypes.number,
  position: PropTypes.oneOf([
    'top',
    'left',
    'right',
    'bottom',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right'
  ]),
  text: PropTypes.string.isRequired,
  timeout: PropTypes.number
};

export default Tooltip;
