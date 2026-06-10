"use client";

import React, { useState } from "react";
import Image from "next/image";

const frames = [
  {
    name: "Purple Neon",
    image: "/frames/frame1.png",
    code: "PURPLE001",
  },
  {
    name: "Blue Ice",
    image: "/frames/frame2.png",
    code: "BLUE002",
  },
  {
    name: "Red Fire",
    image: "/frames/frame3.png",
    code: "RED003",
  },
  {
    name: "Red Benedetta",
    image: "/frames/frame4.png",
    code: "BENE004",
  },
  {
    name: "Its_Jimenez27",
    image: "/frames/frame5.png",
    code: "JIME005",
  },
];

export default function Home() {
  const [codes, setCodes] = useState<Record<string, string>>({});
  const [unlocked, setUnlocked] = useState<Record<string, boolean>>({});

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
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
          <h1 className="text-2xl font-bold tracking-wide">8CTA</h1>
        </div>

        <nav className="flex gap-6 text-zinc-400">
          <a href="#" className="hover:text-white transition">Inicio</a>
          <a href="#frames" className="hover:text-white transition">Marcos</a>
          <a href="#" className="hover:text-white transition">Premium</a>
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
        className="px-8 pb-20 bg-gradient-to-b from-black to-zinc-950"
      >
        <h2 className="text-5xl font-bold mb-12 text-center">Marcos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {frames.map((frame) => (
            <div
              key={frame.code}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-105 hover:border-purple-500 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src={frame.image}
                  alt={frame.name}
                  width={600}
                  height={400}
                  className="w-full transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{frame.name}</h3>
                <p className="text-zinc-400 mt-2">Marco exclusivo de 8CTA Tools.</p>

                {!unlocked[frame.code] ? (
                  <div className="mt-6">
                    <input
                      type="text"
                      placeholder="Ingresa tu código"
                      value={codes[frame.code] || ""}
                      onChange={(e) => setCodes({ ...codes, [frame.code]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white"
                    />
                    <button
                      onClick={() => {
                        if (codes[frame.code] === frame.code) {
                          setUnlocked({ ...unlocked, [frame.code]: true });
                        } else {
                          alert("Código incorrecto");
                        }
                      }}
                      className="w-full mt-3 bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-2xl font-bold"
                    >
                      Verificar Código
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-3 mt-6">
                    <a
                      href={frame.image}
                      download
                      className="flex-1 text-center bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-2xl font-bold"
                    >
                      Descargar
                    </a>
                    <button className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-purple-500 transition">
                      Vista
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center">
        <h3 className="font-bold text-lg">8CTA TOOLS</h3>
        <p className="text-zinc-500 mt-2">Marcos, overlays y diseños para streamers y esports.</p>
        <p className="text-zinc-600 mt-4">© 2026 Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}