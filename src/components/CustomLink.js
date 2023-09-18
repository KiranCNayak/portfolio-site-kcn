import React, { memo } from 'react';

const possibleTextColors = {
  cyan: {
    100: 'text-cyan-100',
    200: 'text-cyan-200',
    300: 'text-cyan-300',
    400: 'text-cyan-400',
    500: 'text-cyan-500',
    600: 'text-cyan-600',
    700: 'text-cyan-700',
    800: 'text-cyan-800',
    900: 'text-cyan-900',
  },
  yellow: {
    100: 'text-yellow-100',
    200: 'text-yellow-200',
    300: 'text-yellow-300',
    400: 'text-yellow-400',
    500: 'text-yellow-500',
    600: 'text-yellow-600',
    700: 'text-yellow-700',
    800: 'text-yellow-800',
    900: 'text-yellow-900',
  },
};

const CustomLink = ({ children, color, colorVariant, href, ...props }) => {
  return (
    <a
      {...props}
      className={`underline font-bold ${
        possibleTextColors[color]
          ? possibleTextColors[color][colorVariant]
            ? possibleTextColors[color][colorVariant]
            : possibleTextColors[color][700]
          : possibleTextColors['cyan'][700]
      }`}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default memo(CustomLink);
