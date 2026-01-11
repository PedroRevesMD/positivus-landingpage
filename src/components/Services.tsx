import "../index.css"
import EngineIllustration from "../assets/engine-illustration.svg"
import PayPerClickIllustration from "../assets/pay-click.svg"
import SocialMediaMarketingIllustration from "../assets/social-media.svg"
import EmailMarketingIllustration from "../assets/email-marketing.svg"
import ContentCreationIllustration from "../assets/content-creation.svg"
import AnalyticsAndTrackingIllustration from "../assets/analytics-tracking.svg"
import ServiceCard from "./ServiceCard"
// FIX: Adicionar a Arrow em conjunto com a div "Learn More"
// TODO: Abstrair os valores hardcoded do título  
export default function Services() {
  return (
    <section className="max-w-screen m-8 lg:m-20">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center">
        <h2 className="font-medium bg-lime-green p-2 rounded-xl text-dark-gray text-2xl font-grotesk">Services</h2>
        <p className="text-base font-grotesk max-w-lg my-4 text-center lg:text-start">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-12">
        <ServiceCard cardName="Search engine optimization" imgUrlPath={EngineIllustration} variant="grey" />
        <ServiceCard cardName="Pay-per-click advertising" imgUrlPath={PayPerClickIllustration} variant="green" />
        <ServiceCard cardName="Social Media Marketing" imgUrlPath={SocialMediaMarketingIllustration} variant="dark" />
        <ServiceCard cardName="Email Marketing" imgUrlPath={EmailMarketingIllustration} variant="grey" />
        <ServiceCard cardName="Content Creation" imgUrlPath={ContentCreationIllustration} variant="green" />
        <ServiceCard cardName="Analytics and Tracking" imgUrlPath={AnalyticsAndTrackingIllustration} variant="dark" />
      </div>
    </section>
  )
}
