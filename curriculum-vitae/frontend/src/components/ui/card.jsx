import React from 'react';
import clsx from 'clsx';

export const Card = ({ className, children, ...props }) => (
  <div className={clsx('rounded-lg border shadow-sm', className)} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className, children, ...props }) => (
  <div className={clsx('p-4 border-b', className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }) => (
  <h3 className={clsx('text-lg font-semibold', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ className, children, ...props }) => (
  <p className={clsx('text-sm text-gray-500 dark:text-gray-400', className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={clsx('p-4', className)} {...props}>
    {children}
  </div>
);
