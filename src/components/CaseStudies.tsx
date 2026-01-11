import "../index.css"

export default function CaseStudies() {
  // TODO: Adicionar posteriormente a seta em frente do texto "Learn More"
  return (
    <section className="max-w-screen m-8 lg:m-20">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <h3 className="font-medium bg-lime-green p-2 rounded-xl text-dark-gray text-2xl font-grotesk">Case Studies</h3>
        <p className="text-base font-grotesk my-4 text-center lg:text-start max-w-[520px]">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>
      <div className="flex flex-col items-center lg:flex-row justify-between bg-dark-gray text-white my-16 mx-auto p-12 rounded-2xl">
        <article className="max-w-2xs flex flex-col my-4 gap-y-4 font-grotesk">
          <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
          <a href="/" className="text-lime-green">Learn More</a>
        </article>
        <article className="max-w-2xs font-grotesk my-4 flex flex-col gap-y-4">
          <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
          <a href="/" className="text-lime-green">Learn More</a>
        </article>
        <article className="max-w-2xs font-grotesk flex flex-col gap-y-4">
          <p>For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
          <a href="/" className="text-lime-green">Learn More</a>
        </article>
      </div>
    </section >
  )
}
