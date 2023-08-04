import { HtmlHTMLAttributes } from 'react';
import ButtonSecondQuery from '../buttons/secondQuery';

type CardArticlesProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  type: string;
  autor: string;
  doi: string;
  pdf: string;
};

export const CardArticles = ({
  type,
  title,
  autor,
  doi,
  pdf,
  ...props
}: CardArticlesProps) => {
  return (
    <div className='border-[1px] bg-white border-zinc-100 rounded-md p-4 shadow-md
    hover:-translate-y-2 transition-all duration-300 '>
      <div className="flex flex-col items-start h-full justify-between max-md:gap-4 gap-2">
        <div className="flex flex-col w-full items-start">
          <span className='text-zinc-400 text-[12px] font-quicksand'>{type}</span>
          <a href={doi}>
          <p className="text-purple-900 font-semibold font-poppins w-full">
            {title}
          </p>  
          </a>
          
          <p className='text-sm'>{autor}</p>
        </div>
        <div className='flex justify-between gap-2 w-full'>
          <a className='px-2 whitespace-nowrap text-pink-500 font-poppins font-semibold text-[10px]
      hover:text-pink-600 transition-all duration-300 w-fit' target='black' href={doi}>Ler mais</a>
          <a target='black' href={pdf} className='px-2 whitespace-nowrap bg-pink-500 rounded-sm text-white font-poppins font-semibold text-[10px] capitalize
      hover:bg-pink-600 transition-all duration-300 w-fit'>PDF</a>
        </div>
      </div>
    </div>
  );
};
