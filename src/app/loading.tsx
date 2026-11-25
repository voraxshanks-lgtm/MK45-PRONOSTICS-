
"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#090a0c] text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 border-t-yellow-400"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear"
            }}
          />

          <span className="text-2xl font-black text-yellow-400">
            MK45
          </span>
        </div>

        <h1 className="text-xl font-black tracking-[0.25em]">
          MK45 PRONOSTICS
        </h1>

        <p className="mt-3 text-sm text-gray-400">
          Préparation de votre espace sportif...
        </p>

        <div className="mx-auto mt-6 h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-yellow-400"
            animate={{ x: [-192, 192] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </main>
  );
}
