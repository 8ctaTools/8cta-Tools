import Image from "next/image";

const frames = [
  {
    name: "Purple Neon",
    image: "/frames/frame1.png",
  },
  {
    name: "Blue Ice",
    image: "/frames/frame2.png",
  },
  {
    name: "Red Fire",
    image: "/frames/frame3.png",
  },
  {
    name: "Red Benedetta",
    image: "/frames/frame4.png",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="8CTA TOOLS"
            width={70}
            height={70}
            className="rounded-xl"
          />

          <h1 className="text-2xl font-bold tracking-wide">
            8CTA
          </h1>

        </div>

        <nav className="flex gap-6 text-zinc-400">

          <a href="#" className="hover:text-white transition">
            Inicio
          </a>

          <a href="#frames" className="hover:text-white transition">
            Marcos
          </a>

          <a href="#" className="hover:text-white transition">
            Premium
          </a>

        </nav>

      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-[85vh] px-6">

        <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
          8CTA TOOLS
        </h1>

        <p className="mt-6 text-zinc-400 text-xl max-w-2xl">
          Marcos, overlays y herramientas premium para streamers.
        </p>

        <div className="mt-10 flex gap-4">

          <a
            href="#frames"
            className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl text-lg font-bold"
          >
            Explorar Marcos
          </a>

          <button className="border border-zinc-700 hover:border-zinc-500 transition px-8 py-4 rounded-2xl text-lg font-bold">
            Ver Premium
          </button>

        </div>

      </section>

      {/* GALERÍA */}
      <section
        id="frames"
        className="px-8 pb-20"
      >

        <h2 className="text-5xl font-bold mb-12">
          Marcos Destacados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {frames.map((frame, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 transition"
            >

              <Image
                src={frame.image}
                alt={frame.name}
                width={600}
                height={400}
                className="w-full"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {frame.name}
                </h3>

                <a
                  href={frame.image}
                  download
                  className="mt-5 inline-block bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-2xl font-bold"
                >
                  Descargar
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500">

        © 2026 8CTA TOOLS - Todos los derechos reservados

      </footer>

    </main>
  );
}