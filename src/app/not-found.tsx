
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#090a0c] text-white">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-yellow-500/30 bg-yellow-500/10">
          <SearchX size={38} className="text-yellow-400" />
        </div>

        <p className="text-sm font-bold tracking-[0.4em] text-yellow-400">
          MK45 PRONOSTICS
        </p>

        <h1 className="mt-5 text-8xl font-black text-yellow-400">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold">
          Page introuvable
        </h2>

        <p className="mt-3 text-gray-400">
          Cette page n'existe pas ou a été déplacée.
          Retournez à l'accueil pour continuer votre visite.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:bg-yellow-300"
        >
          <Home size={19} />
          Retour à l'accueil
        </Link>
      </motion.div>
    </main>
  );
        }
