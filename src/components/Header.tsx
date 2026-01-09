import "../index.css"
import logo from "../assets/logo.svg"
export default function Header() {
  return (
    <header className="flex mx-12 my-6 justify-between font-grotesk items-center px-8">
      <img src={logo} alt="Positivus's Logo" className="size-40" />
      <nav className="hidden lg:flex items-center">
        <ul className="flex gap-x-8 text-lg">
          <li><a href="/">About us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Use Cases</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Blog</a></li>
        </ul>
        <a href="/" className="border-dark-gray border border-solid text-xl rounded-xl ml-8 py-4 px-6">Request a Quote</a>
      </nav>
      <button type="button" className="cursor-pointer lg:hidden border border-solid font-grotesk border-dark-gray border-solid py-1.5 px-4 rounded-xl">Menu</button>
    </header>
  )
}
