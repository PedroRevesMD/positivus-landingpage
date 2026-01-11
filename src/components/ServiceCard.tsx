type VariantType = 'green' | 'dark' | 'grey';

interface ServiceCardProps {
  cardName: string;
  imgUrlPath: string;
  variant: VariantType;
}

interface CardStyles {
  cardBg: string,
  textBg: string,
  arrowCircle: string,
  buttonText: string,
  arrowColor: string,
}

export default function ServiceCard({ cardName, imgUrlPath, variant = "grey" }: ServiceCardProps) {
  const variants: Record<VariantType, CardStyles> = {
    grey: {
      cardBg: "bg-light-gray",
      textBg: "bg-lime-green",
      arrowCircle: "bg-dark-gray",
      buttonText: "text-dark-gray",
      arrowColor: "#b9ff66",
    },
    dark: {
      cardBg: "bg-dark-gray",
      textBg: "bg-white",
      arrowCircle: "bg-light-gray",
      buttonText: "text-light-gray",
      arrowColor: "#191A23",
    },
    green: {
      cardBg: "bg-lime-green",
      textBg: "bg-white",
      arrowCircle: "bg-light-gray",
      buttonText: "text-dark-gray",
      arrowColor: "#191A23",
    },
  };

  const currentTheme = variants[variant] || variants.grey;

  return (
    <article className={`${currentTheme.cardBg} rounded-4xl shadow-[0px_5px_0px_0px_rgba(25,_26,_35,_1)] max-w-2xl flex gap-x-20 items-center mb-8 p-12 border border-solid border-dark-gray`}>
      <div className="flex flex-col gap-y-16">
        <h3 className={`${currentTheme.textBg} font-semibold text-md lg:text-2xl font-grotesk p-1.5 rounded-sm text-dark-gray`}>{cardName}</h3>
        <div className="flex gap-x-4 items-center">
          <span className={`${currentTheme.buttonText} font-grotesk cursor-pointer font-medium`}>Learn More</span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-end max-w-[40%]">
        <img src={imgUrlPath} alt="An Illustration" className="hidden lg:inline" />
      </div>
    </article>
  )
}
