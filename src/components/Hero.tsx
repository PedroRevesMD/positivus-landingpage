import "../index.css"
import HeroIllustration from "../assets/hero-illustration.svg"
export default function Hero() {
  return (
    <section className="flex items-center flex-col-reverse my-20 lg:flex-row m-20">
      <div className="flex flex-col gap-y-4 text-center lg:text-left items-center lg:items-start my-4 lg:max-w-[500px]">
        <h1 className="font-semibold font-grotesk text-5xl">Navigating the digital landscape for success</h1>
        <p className="font-normal font-grotesk text-md">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
        <a href="/" className="my-4 bg-dark-gray font-grotesk text-white w-fit px-8 py-4 rounded-lg">Book a consultation</a>
      </div>
      <div className="mx-auto -mr-2">
        <img src={HeroIllustration} alt="A marketing illustration" width={600} height={500} />
      </div>
    </section>
  )
}
