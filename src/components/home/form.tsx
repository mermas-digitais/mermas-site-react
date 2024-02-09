import ButtonSecondQuery from '../buttons/secondQuery';
import emailjs from 'emailjs-com';

function sendEmail(e: any) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_rmh8b1s',
      'template_j0xrs1g',
      e.target,
      'XlIvHlHa0tkw295zR',
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Mensagem enviada com sucesso!');
      },
      (error) => {
        console.log(error.text);
        alert('Ocorreu um erro ao enviar a mensagem.');
      },
    );

  e.target.reset();
}

export const Form = () => {
  return (
    <>
      <section
        id="contact"
        className="w-[100vw] flex items-center justify-center"
      >
        <div
          className="container relative 
        max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:justify-center max-lg:items-center 
        lg:mb-48"
        >
          <div className="bg-pink-100 h-full rounded-3xl p-8 w-full lg:p-14">
            <div className="lg:w-96">
              <h3 className="text-center md:text-start">
                Não é estudante, mas gostaria de fazer parte dessa iniciativa?
              </h3>
              <p className="text-center md:text-start">
                Siacalma, tem lugar para você também! <br />
                Nós envie uma mensagem e vamos bater um papa!
              </p>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="delay_distance flex flex-col gap-4 justify-center card items-center 
          lg:absolute lg:top-20 lg:right-32 max-sm:w-full"
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
