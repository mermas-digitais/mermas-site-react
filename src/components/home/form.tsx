import ButtonSecondQuery from '../buttons/secondQuery';

export const Form = () => {
  return (
    <>
      <section className="w-[100vw]">
        <div className="container relative mb-48">
          <div className="bg-pink-100 h-full rounded-3xl p-14">
            <div className="w-96">
              <h3 className="text-start">
                Não é estudante, mas gostaria de fazer parte dessa iniciativa?
              </h3>
              <p className="text-start">
                Siacalma, tem lugar para você também! <br/>Nós envie uma mensagem e
                vamos bater um papa!
              </p>
            </div>
          </div>

          <form className="delay_distance flex flex-col gap-4 justify-center card items-center 
          absolute top-20 right-32"
            action="https://formsubmit.co/mermasdigitaisifma@gmail.com"
            method="POST"
          >
            <div className="flex gap-4 flex-col">
              <input
                type="text"
                name="subject"
                placeholder="Assunto:"
                required
              />
              <input type="text" name="name" placeholder="Nome:" required />
              <input type="email" name="email" placeholder="E-mail:" required />
              <textarea
                className="w-80 h-40"
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
