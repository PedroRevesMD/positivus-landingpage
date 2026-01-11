import type { ProcessStepType } from "../types/ProcessStepType";
import "../index.css"

export default function ProcessStep({ id, title, number, description }: ProcessStepType) {
  return (
    <li key={id}>
      <article className="bg-light-gray p-12 my-8 rounded-2xl cursor-pointer">
        <h3>
          <button className="flex flex-col md:flex-row items-center w-full justify-between">
            <div className="flex flex-col md:flex-row items-center">
              <span className="font-grotesk font-semibold text-3xl md:text-5xl md:mr-4 text-center">{number}</span>
              <span className="font-grotesk text-lg md:text-2xl font-medium text-center">{title}</span>
            </div>
            <span className="rounded-full text-3xl border-dark-gray border my-4 size-10 cursor-pointer flex-shrink-0 hover:bg-light-gray hover:text-dark-gray transition-colors">+</span>
          </button>
        </h3>
        <div className="hidden">
          <p className="font-grotesk text-md">{description}</p>
        </div>
      </article>
    </li>
  )
}
