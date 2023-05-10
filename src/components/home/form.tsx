import ButtonSecondQuery from '../buttons/secondQuery';

export const Form = () => {
  return (
    <>
      <section className="w-[100vw]">
        <div className="container relative 
        max-md:flex max-md:flex-col max-md:gap-4 max-md:justify-center max-md:items-center 
        md:mb-48">
          <div className="bg-pink-100 h-full rounded-3xl p-8 w-full md:p-14">
            <div className="md:w-96">
              <h3 className="text-center md:text-start">
                Não é estudante, mas gostaria de fazer parte dessa iniciativa?
              </h3>
              <p className="text-center md:text-start">
                Siacalma, tem lugar para você também! <br/>Nós envie uma mensagem e
                vamos bater um papa!
              </p>
            </div>
          </div>

          <form className="delay_distance flex flex-col gap-4 justify-center card items-center 
          md:absolute md:top-20 md:right-32 max-sm:w-full"
            action="https://formsubmit.co/mermasdigitaisifma@gmail.com"
            method="POST"
          >
            <div className="flex gap-4 flex-col max-sm:w-full">
              <input
                type="text"
                name="subject"
                placeholder="Assunto:"
                required
              />
              <input type="text" name="name" placeholder="Nome:" required />
              <input type="email" name="email" placeholder="E-mail:" required />
              <textarea
                className="sm:w-80 h-40"
                name="message"
                placeholder="Escreva sua mensagem aqui"
                required
              ></textarea>
              <ButtonSecondQuery isRounder name="Enviar" type="submit" />
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
