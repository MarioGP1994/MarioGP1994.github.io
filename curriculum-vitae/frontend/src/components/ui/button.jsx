import React from 'react';
import clsx from 'clsx';

const Button = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    default: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border border-orange-500 text-orange-600 hover:bg-orange-50',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
  };

  return (
    <button
      ref={ref}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    />
  );
});

Button.displayName = 'Button';
export { Button };
