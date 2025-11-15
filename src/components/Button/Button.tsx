// src/components/Button/Button.tsx
import * as React from 'react';
const styles = {
  button: 'button',
  solid: 'solid',
  outline: 'outline',
  ghost: 'ghost',
} as const;
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', className, ...rest }, ref) => {
    const cls = [styles.button, styles[variant], className].filter(Boolean).join(' ');
    return <button ref={ref} className={cls} {...rest} />;
  }
);
Button.displayName = 'Button';