import ButtonPrimaryRadius from '../buttons/primaryRadius';

export const Form = () => {
  return (
    <>
      <section className="w-[100vw] flex relative">
      <div className="absolute w-[100vw] bottom-[-10px] z-[-10]">
          <img src="../../../public/image/onda.svg" alt="" />
        </div>
        <div className="container padding flex flex-row justify-between items-start gap-12">
          <div className="easing_title text-start w-[75%]">
            <h3>Não é estudante mas quer fazer <br/>parte dessa iniciativa?</h3>
            <p className="max-w-[500px]">
              Siacalma tem lugar pra você também, nós envie uma mensagem e
              vamos bater um papo, que tal?
            </p>
          </div>

          <form
            className="delay_distance w-[50%] flex flex-col gap-4 justify-center items-center card p-10"
            action="https://formsubmit.co/mermasdigitaisifma@gmail.com"
            method="POST"
          >
            <h4>Fale com a gente</h4> 

            <input type="text" name="subject" placeholder="Assunto:" required />

            <input
              type="text"
              name="name"
              placeholder="Nome completo:"
              required
            />

            <input type="email" name="email" placeholder="E-mail:" required />

            <textarea
              className="w-full min-h-[150px]"
              name="message"
              placeholder="Escreva sua mensagem aqui"
              required
            ></textarea>

            <div className="w-full items-end">
              <ButtonPrimaryRadius name="Enviar" type="submit" />
            </div>

            <input
              type="hidden"
              name="_autoresponse"
              value="Recebemos sua mensagem! Logo, logo responderemos ;)"
            />

            <input
              type="hidden"
              name="_next"
              value="https://mermasdigitais.netlify.app/message"
            />
            <input type="hidden" name="_template" value="table" />
            
          </form>
        </div>
      </section>
    </>
  );
};
