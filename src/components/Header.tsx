import "../index.css"
import logo from "../assets/logo.svg"
export default function Header() {
  // TODO: Add Responsiviness (Menu Button and Nav Links, Logo Image)
  // FIX: Border Bug on "Menu Button" and "Request a Quote" Button
  return (
    <header className="flex justify-between mt-16 mx-20 font-grotesk mb-30 items-center">
      <img src={logo} alt="Positivus's Logo" className="size-40" />
      <nav className="hidden md:flex items-center">
        <ul className="flex gap-x-8 text-lg">
          <li><a href="/">About us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Use Cases</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
        <a href="/" className="border-dark-gray border-x text-xl rounded-xl py-2 px-4">Request a Quote</a>
      </nav>
      <button type="button" className="cursor-pointer md:hidden font-grotesk borderd-dark-gray border-solid">Menu</button>
    </header>
  )
}
