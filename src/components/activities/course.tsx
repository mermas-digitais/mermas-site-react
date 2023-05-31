import { Database, DesktopTower, FileCode, FileHtml, TreeStructure } from "@phosphor-icons/react"
import { CardActivitys } from "../cards/activity"

type CourseProps = {
    refName: React.MutableRefObject<HTMLDivElement | null>;
}

export const Course = ({refName}:CourseProps) => {
    return (
        <div ref={refName}  className=" flex flex-col justify-center items-center gap-8 py-16">
          <div className="text-center">
            <h3>O que você aprenderá</h3>
            <p className='md:w-[32rem]'>
              Confira abaixo as disciplinas que serão ministradas durante o curso.
            </p>
          </div>

          <div className="flex flex-col md:px-16 max-md:pr-6 gap-4">
            <CardActivitys
              title="Introdução a computação"
              description="Embarque nesta emocionante jornada e mergulhe nos fundamentos da ciência da computação. Desvende os mistérios por trás dos computadores e da programação enquanto adquire conhecimentos essenciais nesta área."
              borderColor="#ff4a97"
            >
              <DesktopTower size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Introdução a programação"
              description="Prepare-se para uma jornada empolgante, onde aprenderá de forma divertida sobre algoritmos, estruturas de dados e linguagens de programação. Desenvolva suas habilidades e explore o mundo da programação de maneira envolvente."
              borderColor="#ff4a97"
            >
              <FileCode size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Modelagem de sistemas e interfaces Web"
              description="Descubra a arte de criar designs funcionais e envolventes para sites e aplicativos. Aprenda as melhores práticas de usabilidade e interação, e desperte sua criatividade para construir experiências digitais incríveis para os usuários."
              borderColor="#ff4a97"
            >
              <TreeStructure size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Fundamentos de desenvolvimento Web I"
              description="Desvende os segredos do desenvolvimento web com este curso fundamental. Aprenda os conceitos essenciais, desde a estruturação de páginas até a estilização com CSS. Prepare-se para construir bases sólidas nesse mundo fascinante."
              borderColor="#ff4a97"
            >
              <FileHtml size={32} color="white" />
            </CardActivitys>
            <CardActivitys
              title="Fundamentos de desenvolvimento Web II"
              description="Aprofunde seus conhecimentos em desenvolvimento web com este curso avançado. Explore tópicos como programação front-end, interatividade com JavaScript e integração de APIs. Expanda suas habilidades e leve seus projetos para o próximo nível."
              borderColor="#ff4a97"
            >
              <Database size={32} color="white" />
            </CardActivitys>
          </div>
        </div>
    )
}