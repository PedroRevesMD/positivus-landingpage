import AmazonLogo from "../assets/Amazon.svg"
import DribbbleLogo from "../assets/Dribbble.svg"
import HubspotLogo from "../assets/HubSpot.svg"
import NetflixLogo from "../assets/Netflix.svg"
import NotionLogo from "../assets/Notion.svg"
import ZoomLogo from "../assets/Zoom.svg"
export default function Logos() {
  return (
    <section className="hidden lg:flex lg:items-center lg:justify-between lg:m-20">
      <img src={AmazonLogo} className="grayscale" alt="Amazon's Logo" />
      <img src={DribbbleLogo} className="grayscale" alt="Dribbble's Logo" />
      <img src={HubspotLogo} className="grayscale" alt="Hubspot's Logo" />
      <img src={NetflixLogo} className="grayscale" alt="Netflix's Logo" />
      <img src={NotionLogo} className="grayscale" alt="Notion's Logo" />
      <img src={ZoomLogo} className="grayscale" alt="Zoom's Logo" />
    </section>
  )
}
