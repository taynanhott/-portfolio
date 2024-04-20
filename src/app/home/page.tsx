
import { CarouselPlugin } from '@/components/Resources/Carrousel/carrousel';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="z-10 relative ml-5 mr-5">
      <div className="text-center max-w-3xl mx-auto border-b border-gray-500 pb-2 border-current">
        <div className="text-6xl whitespace-nowrap font-sans font-bold mb-4">Taynan Z. Hott</div>
        <div className="font-sans text-gray-500">
          Full Stack | Web Developer</div>
      </div>
      <div className="text-center pt-2">JavaScript | PHP | TypeScript | React | Tailwind | Prisma | Next | MySQL</div>
      <div className="max-w-3xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex justify-center">
          <div className="mr-5">
            <Image
              src="/image/fotoiabw.png"
              width={300}
              height={300}
              alt=""
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="text-5xl font-sans font-bold mb-5">Deixe eu me apresentar:</div>
          <div className="font-sans text-gray-500 mb-5">
            Sou Analista de Desenvolvimento II, busco sempre aprimorar minhas habilidades e conhecimento em novas tecnologias. Sou comunicativo, dedicado e experiente em gestão e comunicação em grupo.
          </div>
          <div className="flex">
            <a
              className="mr-2"
              href="https://www.linkedin.com/in/taynan-hott/"
              target="_blank"
            >
              <Image
                src="/image/logo/linkedin.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
            <a
              className="mr-2"
              href="https://github.com/taynanhott"
              target="_blank"
            >
              <Image
                src="/image/logo/github.png"
                width={30}
                height={30}
                className="filter invert-40 hover:invert-0"
                alt=""
              />
            </a>
            <a
              className="mr-2"
              href="https://wa.me/+5531984145023"
              target="_blank"
            >
              <Image
                src="/image/logo/whatsapp.png"
                width={30}
                height={30}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="items-center">
        <div className="block mt-16 text-3xl font-bold font-sans text-center">
          <p>Projetos Pessoais</p>
        </div>
        <div className="flex mt-5 ml-20 mr-20 justify-center">
          <CarouselPlugin />
        </div>
      </div>
    </div >
  );
}