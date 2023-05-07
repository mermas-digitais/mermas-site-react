import {
  GraduationCap,
  ShootingStar,
  UsersThree,
  Warehouse,
} from '@phosphor-icons/react';

const card = [
  {
    icon: <GraduationCap size={32} color="#ffff " />,
    title: 'Aulas gratuitas',
    description:
      'Todas as atividades são gratuitas e ao final do curso, você receberá um certificado de conclusão.',
  },
  {
    icon: <Warehouse size={32} color="#ffff" />,
    title: 'Aulas presenciais',
    description:
      'As aulas teóricas e práticas são realizadas no Instituto Federal do Maranhão, Campus Imperatriz.',
  },
  {
    icon: <ShootingStar size={32} color="#ffff" />,
    title: 'Aprendendo do zero!',
    description:
      'Não é necessário ter qualquer conhecimento prévio, pois você aprenderá tudo do zero!',
  },
  {
    icon: <UsersThree size={32} color="#ffff" />,
    title: 'Aprendizado em grupo',
    description:
      'Turmas formadas com meninas que buscam aprender mais sobre o universo tecnológico.',
  },
];
export default function Course() {
  return (
    <section className="padding z-10 container items-start gap-8 flex flex-col justify-center">
      <div className="text-center w-full">
        <h3>
          Olha essa mega oportunidade, <br />
          Não vai perder ein?
        </h3>
      </div>
      <div className="course-grid grid gap-12 grid-rows-2 grid-flow-col">
        {card.map((item, key) => {
          return (
            <div className="easing_card cursor-pointer card hover:border-purple-100 hover:-translate-y-1 shadow-pop flex flex-col">
              <div className='flex gap-4 items-center'>
                <div className="iconRetangle">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
              </div>
              <div className='pl-16'>
                <span>{item.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
