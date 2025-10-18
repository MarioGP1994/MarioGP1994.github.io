import React from 'react';
import clsx from 'clsx';

const Badge = ({ className, variant = 'default', children, ...props }) => {
  const variants = {
    default: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
    secondary: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200'
  };

  return (
    <span className={clsx('px-2 py-1 rounded-full text-xs font-medium', variants[variant], className)} {...props}>
      {children}
    </span>
  );
};

export { Badge };
