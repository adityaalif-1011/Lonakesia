export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-32 text-center">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-[clamp(40px,8vw,90px)] leading-[0.95] font-extrabold tracking-tight mb-10">
          Kuasai bahasa <br />
          <span className="font-serif italic text-gray-300 font-light">
            daerah kita—
          </span>{" "}
          <span className="relative inline-block">
            seru,
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1 9C25 2 75 2 99 9"
                stroke="#FF5C00"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <br />
          mudah, & gratis
        </h1>

        {/* Description */}
        <p className="max-w-xl mx-auto mb-12 text-xl font-medium text-gray-500">
          Belajar Bahasa Jawa, Sunda, Bali, hingga Papua dengan metode interaktif
          yang menyenangkan. Jangan biarkan bahasa daerah kita pudar!
        </p>

        {/* CTA */}
        <button className="bg-orange-500 text-white px-12 py-5 rounded-full text-xl font-extrabold shadow-[0_20px_40px_rgba(255,92,0,0.2)] hover:scale-105 transition">
          Pilih Bahasa Sekarang
        </button>

        {/* Language List */}
        <div className="mt-24">
          <p className="mb-8 text-[10px] font-extrabold tracking-[3px] uppercase text-gray-300">
            Tersedia dalam berbagai bahasa
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-2xl font-black italic text-gray-300">
            {["JAWA", "SUNDA", "BALI", "MINANG", "BUGIS", "ACEH"].map(
              (lang, i) => (
                <span
                  key={i}
                  className="hover:text-orange-500 hover:scale-110 transition cursor-pointer"
                >
                  {lang}
                </span>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
