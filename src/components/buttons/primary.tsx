import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  to: string;
};

export default function ButtonPrimary({ name, to, ...props }: ButtonProps) {
  return (
    <Link to={to}>
      <button
        className="px-8 py-4 bg-purple-pink text-white rounded-xl font-poppins font-semibold text-sm uppercase
        hover:bg-purple-pink-hover transition-all duration-300"
        {...props}
      >
        {name}
      </button>
    </Link>
  );
}
