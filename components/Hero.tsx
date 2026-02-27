import SearchBar from "./SearchBar"

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-start"
      style={{ backgroundImage: "url('/bus-page-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 pt-32 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          Online Book Bus Tickets with{" "}
          <span className="text-yellow-400">YesGoBus</span>
        </h1>

        <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto">
          India’s largest online bus ticketing platform, trusted by over 6 million Indians.
        </p>

        <div className="mt-10">
          <SearchBar />
        </div>
      </div>
    </section>
  )
}