type CardInforProps = {
  title: string;
  description: string;
};

export const CardInfor = ({ title, description }: CardInforProps) => {
  return (
    <div className="bg-slate-100 p-8 rounded-3xl 
    hover:shadow-md hover:-translate-y-2 transition-all duration-300 cursor-pointer ">
      <h4 className="text-base pb-2">{title}</h4>
      <span className="text-sm">{description}</span>
    </div>
  );
};
