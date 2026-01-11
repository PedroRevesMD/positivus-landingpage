import type { TeamCardType } from "../types/TeamCardType";
import LinkedinLogo from "../assets/LinkedinLogo.svg"

export default function TeamCard({ imgUrlPath, name, position, description }: TeamCardType) {
  return (
    <li>
      <article className="max-w-sm shadow-[0px_5px_0px_0px_rgba(25,_26,_35,_1)] rounded-4xl my-4 border border-dark-gray p-4">
        <header className="flex border-b border-dark-gray pb-4">
          <div className="flex flex-col lg:flex-row items-center gap-y-4">
            <img src={imgUrlPath} alt={`${name}`} className="mx-2" width={80} height={80} loading="lazy" />
            <div className="font-grotesk mx-4">
              <h3 className="font-semibold text-xl">{name}</h3>
              <p>{position}</p>
            </div>
          </div>
          <img src={LinkedinLogo} alt="An image of linkedin's logo" className="hidden lg:block w-6 cursor-pointer ml-8 mb-8" loading="lazy" width={24} height={24} rel="noopener noreferrer" aria-label={`Linkedin of ${name}`} />
        </header>
        <p className="my-4 mx-2.5 font-grotesk text-md">{description}</p>
      </article>
    </li >
  )
}
