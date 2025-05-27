interface AppFeatures {
  image: string;
  label: string;
  text: string;
}

const Features = ({image,label,text} : AppFeatures) => {
    return(
        <section
      id="build"
      className="container mx-auto px-6 py-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Text block */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            {label}
          </h2>
          <p className="text-gray-600 text-base">
            {text}
          </p>
        </div>

        {/* Image block */}
        <div className="flex-1">
          <img
            src={image}
            alt="Knitting Collective"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
      </div>
    </section>
    )
}

export default Features;