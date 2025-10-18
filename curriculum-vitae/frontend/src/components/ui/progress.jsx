import React from 'react';
import clsx from 'clsx';

const Progress = ({ value = 0, className, ...props }) => (
  <div className={clsx('w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden', className)} {...props}>
    <div
      className="h-full bg-gradient-to-r from-orange-500 to-teal-500 transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);

export { Progress };
