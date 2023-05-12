import ButtonPrimary from '../../components/buttons/primary';
import imgLogin from '../../../public/assets/logo.svg';

export const LoginPage = () => {
  return (
    <section className='w-[100vw] h-[100vh] bg-[#F6EEFF] flex justify-center items-center'>
      <div className='container flex flex-col gap-6 max-md:px-16 max-sm:px-8 lg:px-16'>
        <div className='flex flex-row justify-start items-center gap-2'>
          <img className='w-16' src={imgLogin} alt="Logo da Mermãs Digitais" />
          <h3 className='text-xl mb-0 leading-5'>Mermãs<br/>Digitais</h3>
        </div>
        <div className='flex flex-col md:flex-row md:items-center justify-between  gap-16'>
          <div className='md:w-[32rem] w-full max-sm:w-52'>
            <h2>
              Faça seu <i className='not-italic text-pink-500'>login na plataforma</i>
            </h2>
            <p>Bem-vindo administrador</p>
          </div>
          <div className='flex flex-col gap-4 p-6 sm:p-12 w-full card lg:w-[32rem]'>
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
