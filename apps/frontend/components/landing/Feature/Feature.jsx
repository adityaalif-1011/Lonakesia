import { Map, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="px-6 py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

        {/* Card 1 */}
        <div className="col-span-12 md:col-span-7 relative overflow-hidden rounded-[60px] bg-[#FFF490] p-12 min-h-[520px] flex flex-col">
          <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-8">
            <Map size={32} />
          </div>

          <h3 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
            Eksplorasi <br /> Ragam Dialek
          </h3>

          <p className="text-lg font-medium max-w-xs">
            Dari Ngoko hingga Kromo Inggil, pelajari konteks budaya di balik setiap kata.
          </p>

          {/* Mockup */}
          <div className="absolute -bottom-20 -right-5 w-[80%] h-[50%] bg-white rounded-tl-[40px] p-10 shadow-2xl">
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 text-[10px] font-extrabold italic rounded-full bg-orange-100 text-orange-500">
                Ngoko
              </span>
              <span className="px-3 py-1 text-[10px] font-extrabold italic rounded-full bg-sky-100 text-sky-600">
                Kromo
              </span>
            </div>
            <p className="font-serif italic text-2xl text-gray-400">
              “Sugeng Rawuh...”
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-5 rounded-[60px] bg-[#D1F5D3] p-12 min-h-[520px] flex flex-col">
          <div className="w-16 h-16 rounded-2xl bg-black/5 flex items-center justify-center mb-8">
            <Zap size={32} />
          </div>

          <h3 className="text-4xl font-extrabold mb-4">
            Misi Harian
          </h3>

          <p className="text-lg font-medium max-w-xs">
            Belajar kosakata baru setiap pagi sambil minum kopi.
          </p>

          <div className="mt-auto bg-white/40 border-2 border-white rounded-3xl p-6">
            <div className="h-3 bg-green-200 rounded-full overflow-hidden mb-3">
              <div className="h-full w-[65%] bg-green-600 rounded-full" />
            </div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-800">
              Progres: 12/20 Kata
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-12 md:col-span-5 rounded-[60px] bg-[#E7D1FF] p-12 min-h-[520px] flex flex-col items-center justify-center text-center">
          <div className="w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center text-6xl mb-8">
            🇮🇩
          </div>

          <h3 className="text-4xl font-extrabold mb-4">
            Cinta Tanah Air
          </h3>

          <p className="text-lg font-medium max-w-xs">
            Menjaga warisan budaya tetap hidup.
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-span-12 md:col-span-7 rounded-[60px] bg-[#FFD1B9] p-12 min-h-[520px] flex flex-col">
          <h3 className="text-5xl font-extrabold leading-tight mb-6">
            Belajar Lewat <br /> Cerita Rakyat.
          </h3>

          <p className="text-lg font-medium max-w-xs">
            Dengarkan audio legenda Nusantara dengan pengisian suara asli.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl font-bold w-fit">
            Mulai Mendengar
          </button>
        </div>

      </div>
    </section>
  );
}
