import { Plus } from '@phosphor-icons/react';
import { HtmlHTMLAttributes } from 'react';

type CardActivitysProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  borderColor: string;
};

export const CardActivitys = ({
  title,
  description,
  borderColor,
  ...props
}: CardActivitysProps) => {
  return (
    <div
      className=" py-4 flex justify-center items-center gap-16
    hover:-translate-y-2 transition-all duration-300 cursor-pointer card"
    >
      <div className="flex flex-col justify-start">
        <div className="flex w-full gap-4 items-center">
          <div className="iconRetangle">{props.children}</div>
          <p className="pb-2 text-pink-500 font-semibold font-poppins w-full">
            {title}
          </p>
        </div>
        <div className='ml-16'>
          <span className="text-sm">{description}</span>
        </div>
      </div>
      <div className="buttonCircle">
        <Plus size={24} color="#ff4a97" />
      </div>
    </div>
  );
};