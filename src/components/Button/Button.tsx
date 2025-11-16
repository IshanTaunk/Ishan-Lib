// src/components/Button/Button.tsx
import * as React from 'react';
const styles = {
  button: 'button',
  solid: 'solid',
  outline: 'outline',
  ghost: 'ghost',
  sm: 'sm',
  md: 'md',
  lg: 'lg'
} as const;
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', className, ...rest }, ref) => {
    const cls = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');
    return <button ref={ref} className={cls} {...rest} />;
  }
);

Button.displayName = 'Button';