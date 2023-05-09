import ButtonPrimary from '../../components/buttons/primary';
import imgLogin from '../../../public/assets/logo.svg';

export const LoginPage = () => {
  return (
    <section className='w-[100vw] h-[100vh] bg-[#F6EEFF]'>
      <div className='container padding px-16 flex flex-col gap-4'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <img className='w-16' src={imgLogin} alt="Logo da Mermãs Digitais" />
          <h3 className='text-xl mb-0 leading-5'>Mermãs<br/>Digitais</h3>
        </div>
        <div className='flex justify-between items-center gap-16'>
          <div className='w-64'>
            <h3>
              Faça seu <i className='not-italic text-pink-500'>login na plataforma</i>
            </h3>
            <p>Bem-vindo administrador</p>
          </div>
          <div className='flex flex-col gap-4 p-12 w-[28rem] card'>
            <input type="email" placeholder='E-mail' name="" />
            <input type="password" placeholder='Senha' name="" id="" />
            <a className='text-xs text-gray-300 font-poppins font-medium' href="">Esqueci minha senha</a>
            <ButtonPrimary to="/admin" isRounder name="Entrar" />
          </div>
        </div>
      </div>
    </section>
  );
};
