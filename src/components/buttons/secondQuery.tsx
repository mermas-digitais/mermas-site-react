import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  isRounder?: boolean;
  isIcon?: boolean;
};

export default function ButtonSecondQuery({
  name,
  isRounder = false,
  isIcon = false,
  ...props
}: ButtonProps) {
  return (
    <button
    className={`px-8 whitespace-nowrap py-4 bg-pink-500 text-white font-poppins font-semibold text-sm capitalize
      hover:bg-pink-600 transition-all duration-300 w-full ${isRounder ? 'rounded-full': 'rounded-xl'}
      ${isIcon ? 'flex justify-between items-center gap-2 pr-4': ''}`}
      {...props}
    >
      {name}
      {props.children}
    </button>
  );
}
