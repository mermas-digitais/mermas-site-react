type MemberProps = {
    name: string;
    image: string;
    role: string;
    email: string;

}

export const MemberCard = ({name, image, role,email}:MemberProps, {...props}) => {
  return (
    <div
        {...props}
      className="row-end-20
            relative border-solid border-4 rounded-2xl 
            border-transparent hover:border-purple-500 transform duration-300 cursor-pointer"
    >
      <img
        className="object-cover w-full h-full rounded-xl"
        src={image}
        alt="Ímagem de um membro da equipe"
      />
      <address
        className="flex flex-col z-10
              absolute bottom-0 m-2 leading-3
              text-[10px] font-poppins not-italic text-white"
      >
        <b>{name}</b>
        <strong className="font-normal">{role}</strong>
        <a
          href="mailto:webmaster@example.com"
          className="text-[10px]  leading-3 w-full break-all"
        >
          {email}
        </a>
      </address>
      <div
        className="rounded-xl absolute top-0 w-full h-full 
                bg-gradient-to-b from-transparent to-[#22012c]"
      ></div>
    </div>
  );
};
