import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  to: string;
};

export default function ButtonSecond({ name, to, ...props }: ButtonProps) {
  return (
    <Link target='black' to={to}>
      <button
        className="inline-flex w-full items-center px-8 py-4 border-gradient 
        hover:border-gradient-hover border-transparent 
        border-solid border-2 rounded-xl 
        text-pink-500 text-sm uppercase font-poppins font-semibold"
        {...props}
      >
        {name}
      </button>
    </Link>
  );
}
