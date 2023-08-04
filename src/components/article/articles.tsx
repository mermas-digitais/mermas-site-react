import { DesktopTower } from '@phosphor-icons/react';
import { CardArticles } from '../cards/article';
import ButtonPrimary from '../buttons/primary';
import ButtonSecond from '../buttons/second';
import ButtonSecondQuery from '../buttons/secondQuery';

type CourseProps = {
  refName: React.MutableRefObject<HTMLDivElement | null>;
};

export const Articles = ({ refName }: CourseProps) => {
  return (
    <div
      ref={refName}
      className=" flex flex-col  justify-center items-center gap-8 py-16"
    >
      {/* <div className="text-start">
        <h3>Confira nossos artigos</h3>
        <p className="md:w-[28rem]">
          Os Anais do XVII Women in Information Technology (WIT 2023) trazem os
          artigos selecionados e apresentados na edição do evento realizada em
          João Pessoa, no período de 06 a 11 de agosto de 2023, como parte do
          XLIII Congresso da Sociedade Brasileira de Computação (CSBC 2023)
        </p>
      </div> */}

      <div className="grid grid-flow-row grid-cols-1  md:grid md:px-16 max-md:pr-6 gap-4">
        <CardArticles
          type="Artigo Completo"
          title="Presença digital dos projetos parceiros do Programa Meninas Digitais: proposta estratégica para consolidá-los na internet"
          autor="Lailla Galeno da Silva, Simone Azevedo Bandeira de Melo Aquino, Thiago Paiva Freire"
          doi="https://doi.org/10.5753/wit.2023.230898"
          pdf="https://sol.sbc.org.br/index.php/wit/article/view/25027/24848"
        ></CardArticles>

        <CardArticles
          type="Artigo Completo"
          title="Uma plataforma para mulheres na área de tecnologia: prototipação de um site com metodologia de UX Design para compartilhamento de projetos com a ferramenta Figma"
          autor="Gabriel Vieira Lima, Lailla Galeno da Silva, Steffane de Oliveira Castro, José Vicente Lima Garros, Vinicius Schineider Januário Viana, Yasmin Milhomem de Oliveira, Simone Azevedo Bandeira de Melo Aquino, Thiago Paiva Freire"
          doi="https://doi.org/10.5753/wit.2023.230672"
          pdf="https://sol.sbc.org.br/index.php/wit/article/view/25033/24854"
        ></CardArticles>

        <CardArticles
          type="Artigo Curto"
          title="Oficina de Robótica com Arduino para Alunas do Ensino Médio da Rede Pública: um Relato de Experiência"
          autor="Elian Vitor de Oliveira Castro, Steffane de Oliveira Castro, Simone Azevedo Bandeira de Melo Aquino, Thiago Paiva Freire"
          doi="https://doi.org/10.5753/wit.2023.230336"
          pdf="https://sol.sbc.org.br/index.php/wit/article/view/25038/24859"
        ></CardArticles>

        <CardArticles
          type="Artigo Curto"
          title="Aprendendo através de jogos: Relato de experiência de uma oficina para o desenvolvimento de jogos 2D com meninas no projeto de extensão Mermãs Digitais"
          autor="Vinícius Schineider Januário Viana, Yasmin Milhomem de Oliveira, Gabriel Vieira Lima, Lailla Galeno da Silva, Simone Azevedo Bandeira de Melo Aquino, Thiago Paiva Freire"
          doi="https://doi.org/10.5753/wit.2023.230921"
          pdf="https://sol.sbc.org.br/index.php/wit/article/view/25055/24876"
        ></CardArticles>

        <CardArticles
          type="Artigo Curto"
          title="Mão no Hardware: Como mulheres e informática podem caminhar juntas?"
          autor="Yasmin Milhomem de Oliveira, Gabriel Vieira Lima, Vinícius Schineider Januário Viana, Simone Azevedo Bandeira de Melo Aquino, Thiago Paiva Freire"
          doi="https://doi.org/10.5753/wit.2023.230933"
          pdf="https://sol.sbc.org.br/index.php/wit/article/view/25056/24877"
        ></CardArticles>
      </div>
      <a href='https://sol.sbc.org.br/index.php/wit/issue/view/1128'>
        <ButtonSecondQuery
          name="Edição 2023"
        />
      </a>
    </div>
  );
};
