import { Medal } from "@phosphor-icons/react"
import imgCertificado from '../../../public/assets/certificado.png';

export const Certificate = () => {
    return (
        <div className="relative bg-pink-100 p-16 rounded-3xl flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="buttonCircle">
            <Medal size={32} color="#ff4a97" />
          </div>
          <div>
            <h2 className="text-3xl mb-2">Certificado de Conclusão</h2>
            <p>
              No final do programa vocẽ receberar um certificado de conclusão
            </p>
          </div>
        </div>

        <div className="w-80 absolute right-20">
          <img
            src={imgCertificado}
            className="object-cover"
            alt="Imagem de um Certificado"
          />
        </div>
      </div>
    )
}