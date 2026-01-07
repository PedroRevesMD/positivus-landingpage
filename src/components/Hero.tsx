import "../index.css"
import HeroIllustration from "../assets/hero-illustration.svg"
export default function Hero() {
  // FIX:  Margin of the "Book a Consultation" Button
  // TODO: Add Responsiviness (Menu Button and Nav Links, Logo Image)
  return (
    <section className="my-12">
      <div className="flex flex-col-reverse">
        <div className="text-center mx-8">
          <h1 className="font-grotesk font-bold text-4xl">Navigating the digital landscape for success</h1>
          <p className="font-grotesk">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
          <a href="/" className="font-grotesk bg-dark-gray text-white rounded-lg px-6 py-4 my-8">Book a consultation</a>
        </div>
        <div className="mx-auto">
          <img src={HeroIllustration} alt="A marketing illustration" />
        </div>
      </div>
    </section>
  )
}
