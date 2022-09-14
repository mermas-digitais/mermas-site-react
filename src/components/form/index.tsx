import './index.css';
export const Form = () => {
  return (
    <>
      <section id="form">
        <div className="form-shape1" />

        <div className="form-shape2" />
        <div className="container__form container">
          <div className="form__title easing_title">
            <h2 className="title">
              Não é estudante mas quer fazer parte dessa iniciativa?
            </h2>
            <p>Siacalma tem lugar pra você também ❤ </p>
            <span>
              Venha apoiar mais meninas nas ciências, nos envie uma mensagem e
              vamos bater um papo, que tal?{' '}
            </span>
          </div>

          <form
            className="form__submit delay_distance"
            action="https://formsubmit.co/mermasdigitaisifma@gmail.com"
            method="POST"
          >
            <div className="form__input">
              <input
                type="text"
                name="subject"
                placeholder="Assunto:"
                required
              />
              <div className="form_user">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo:"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail:"
                  required
                />
              </div>
            </div>
            <div className="form_message">
              <textarea
                name="message"
                cols={30}
                rows={10}
                placeholder="Escreva sua mensagem aqui"
                required
              ></textarea>
              <button type="submit">Enviar</button>
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
