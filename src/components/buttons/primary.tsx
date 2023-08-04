import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  to: string;
  isRounder?: boolean;
};

export default function ButtonPrimary({ name, to,isRounder=false, ...props }: ButtonProps) {
  return (
    <Link to={to}>
      <button
        className={`px-8 py-4 w-full bg-purple-pink text-white font-poppins font-semibold text-sm uppercase
        hover:bg-purple-pink-hover ease-in-out transition-all duration-300 ${isRounder ? 'rounded-full': 'rounded-xl'}`}
        {...props}
      >
        {name}
      </button>
    </Link>
  );
}
