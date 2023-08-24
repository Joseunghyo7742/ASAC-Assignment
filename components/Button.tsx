import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

{/*ButtonHTMLAttributes: ts에서 제공하는 제네릭 타입. HTML 버튼 요소에 적용할 수 있는 모든 속성 포함 */}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-full bg-green-500 border border-transparent px-3 py-3 disabled:opacity-50 disabled:cursor-not-allowed
          text-black font-bold hover:opacity-75 transition`,className
        )} 
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
