import "../index.css"

export default function ContactUs() {
  const inputClasses = "w-full bg-white rounded-xl border border-dark-gray px-6 py-4 text-base placeholder:text-dark-gray/40 focus:outline-none focus:ring-2 focus:ring-lime-300 transition-all";

  const labelClasses = "block mb-2 text-base font-medium text-black font-grotesk";

  return (
    <section className="max-w-screen m-4 lg:m-20 overflow-hidden px-4">
      <div className="flex flex-col lg:flex-row gap-x-8 items-center mb-10">
        <h2 className="font-medium bg-lime-green px-4 py-2 rounded-xl text-black text-2xl font-grotesk">Contact Us</h2>
        <p className="text-base font-grotesk max-w-xs my-4 text-center lg:text-start">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className="bg-light-gray p-16 rounded-4xl gap-x-10 font-grotesk">
        <div className="w-full ">
          <form className="space-y-6">
            <fieldset className="flex flex-col lg:flex-row gap-x-8 mb-6">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="radio"
                  name="option"
                  defaultChecked
                  className="appearance-none size-4 lg:size-6 rounded-full border border-black bg-white checked:bg-lime-green checked:border-black transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black"
                />
                <span className="text-base text-black">Say Hi</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="radio"
                  name="option"
                  className="appearance-none size-4 lg:size-6 rounded-full border border-black bg-white checked:bg-lime-green border-black transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-black"
                />
                <span className="text-base text-black">Get a Quote</span>
              </label>
            </fieldset>

            <div>
              <label htmlFor="name" className={labelClasses}>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Name"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>Message*</label>
              <textarea
                className={`${inputClasses} resize-none min-h-[160px]`}
                name="message"
                id="message"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit lg:w-full bg-gray-900 text-white font-medium text-lg p-4 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer mt-4"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section >
  )
}
