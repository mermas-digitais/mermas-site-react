import { Medal } from "@phosphor-icons/react"
import imgCertificado from '../../../public/assets/certificado.png'

export const Certificate = () => {
    return (
        <div className="relative bg-pink-100 p-16 rounded-3xl flex items-center justify-between">
        <div className="flex flex-col gap-4 z-10">
          <div className="buttonCircle">
            <Medal size={32} color="#ff4a97" />
          </div>
          <div className="max-lg:w-64 lg:w-[28rem] max-sm:w-full">
            <h3>Certificado de Conclusão</h3>
            <p>
              No final do programa vocẽ receberar um certificado de conclusão
            </p>
          </div>
        </div>

        <div className="w-64 lg:w-80 absolute right-20 max-sm:invisible">
          <img
            src={imgCertificado}
            className="object-cover"
            alt="Imagem de um Certificado"
          />
        </div>
      </div>
    )
}