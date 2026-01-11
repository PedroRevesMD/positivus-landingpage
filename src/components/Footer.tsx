import "../index.css"
import LinkedinIcon from "../assets/linkedinIcon.svg"
import TwitterIcon from "../assets/twitterIcon.svg"
import FacebookIcon from "../assets/facebookIcon.svg"
import PositivusWhiteLogo from "../assets/positivus-whitelogo.svg"
export default function Footer() {
  return (
    <footer className="mx-20 bg-dark-gray font-grotesk max-w-screen rounded-t-4xl">
      <div className="flex flex-col lg:flex-row items-center justify-between px-20 pt-12">
        <img src={PositivusWhiteLogo} alt="Positivus's Logo" loading="lazy" />
        <nav>
          <ul className="flex flex-col lg:flex-row gap-x-12 underline text-light-gray m-4">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Use Cases</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Blog</li>
          </ul>
        </nav>
        <div className="flex flex-row gap-x-6 m-4">
          <img src={LinkedinIcon} alt="Linkedin's Icon" loading="lazy" className="cursor-pointer" />
          <img src={FacebookIcon} alt="Facebook's Icon" loading="lazy" className="cursor-pointer" />
          <img src={TwitterIcon} alt="Twitter's Icon" loading="lazy" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-x-48 m-12">
        <div className="text-white font-grotesk mx-12">
          <span className="p-1.5 bg-lime-green text-dark-gray font-medium text-lg rounded-md">Contact Us:</span>
          <div className="flex flex-col gap-y-2.5 mt-4">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St
              Moonstone City, Stardust State 12345</p>
          </div>
        </div>
        <div className="bg-light-gray/20 rounded-2xl p-6">
          <input type="email" placeholder="Email" className="border border-light-gray/50 text-xl font-medium text-white p-3 rounded-xl" />
          <button className="bg-lime-green text-dark-gray font-medium text-lg p-2.5 ml-6 rounded-xl cursor-pointer">Subscribe to News</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row border-t border-light-gray pt-4">
        <span className="text-light-gray text-center lg:text-left m-4">© 2023 Positivus. All Rights Reserved.</span>
        <a href="" className="text-light-gray underline text-center lg:text-left m-4">Privacy Policy</a>
      </div>
    </footer>
  )
}
