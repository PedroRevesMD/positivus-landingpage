import "../index.css"
import CallSectionIllustration from "../assets/cta-illustration.svg"


export default function CallSection() {
  return (
    <section className="bg-light-gray m-8 lg:m-20  max-w-screen flex flex-col items-center justify-between lg:flex-row px-12 rounded-2xl">
      <div className="font-grotesk text-center lg:text-start my-8 max-w-lg flex items-center lg:items-start flex-col gap-y-2">
        <h2 className="font-semibold text-3xl">Let’s make things happen</h2>
        <p className="text-base">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
        <a href="/" className="bg-dark-gray font-grotesk text-white w-fit my-4 px-8 py-4 rounded-lg ">Get your free proposal</a>
      </div>
      <div className="hidden lg:inline mr-45">
        <img src={CallSectionIllustration} alt="Abstract Illustration" />
      </div>
    </section>
  )
}
