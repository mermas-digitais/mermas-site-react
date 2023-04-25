import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  to?: string;
};

export default function ButtonPrimaryRadius({
  name,
  ...props
}: ButtonProps) {
  return (
    <button
      className="px-7 py-3 bg-purple-pink text-white rounded-full font-poppins font-semibold text-sm capitalize
        hover:bg-purple-pink-hover transition-all duration-300 w-full"
      {...props}
    >
      {name}
    </button>
  );
}
