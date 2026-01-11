import "../index.css"
import { processSteps } from "../processSteps";
import ProcessStep from "./ProcessStep";

export default function WorkingProcess() {
  return (
    <section className="max-w-screen m-8 lg:m-20">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <h2 className="font-medium bg-lime-green p-2 rounded-xl text-dark-gray text-2xl text-center font-grotesk">Our Working Process </h2>
        <p className="text-base font-grotesk max-w-2xs my-4 text-center lg:text-start">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
      <ol>
        {processSteps.map((step) => (
          <ProcessStep id={step.id} number={step.number} title={step.title} description={step.description} />
        ))}
      </ol>
    </section>
  )
}
